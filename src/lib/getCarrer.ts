import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import type { Carrer } from 'src/types/carrer';

const carrerDirectory = path.join(process.cwd(), 'src/carrer');

export const getSortedCarrerData = (): Omit<Carrer, 'contentHtml'>[] => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(carrerDirectory);
  const allCarrerData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(carrerDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    if (typeof matterResult.data.title !== 'string') {
      throw Error('title must be string!');
    }

    if (typeof matterResult.data.term !== 'string') {
      throw Error('term must be string!');
    }

    if (typeof matterResult.data.summary !== 'string') {
      throw Error('summary must be string!');
    }

    if (typeof matterResult.data.description !== 'string') {
      throw Error('description must be string!');
    }

    if (Array.isArray(typeof matterResult.data.skills)) {
      throw Error('skills must be array!');
    }

    const convDescription = matterResult.data.description.replace(/\/n/g, '\n');

    // Combine the data with the id
    return {
      id,
      term: matterResult.data.term,
      title: matterResult.data.title,
      summary: matterResult.data.summary,
      description: convDescription,
      skills: matterResult.data.skills,
    };
  });
  // Sort posts by date
  return allCarrerData.sort((a, b) => {
    if (a.term < b.term) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const getAllCarrerIds = (): { params: Pick<Carrer, 'id'> }[] => {
  const fileNames = fs.readdirSync(carrerDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export const getCarrerData = async (id: string): Promise<Pick<Carrer, 'id' | 'contentHtml'>> => {
  const fullPath = path.join(carrerDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
  };
};
