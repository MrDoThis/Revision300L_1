import { CourseData } from './types';
import { mac311Data } from './mac311';
import { mac313Data } from './mac313';
import { mac323Data } from './mac323';
import { mac331Data } from './mac331';
import { mac333Data } from './mac333';
import { mac341Data } from './mac341';
import { mac343Data } from './mac343';

export * from './types';

export const allCourses: CourseData[] = [
  mac311Data,
  mac313Data,
  mac323Data,
  mac331Data,
  mac333Data,
  mac341Data,
  mac343Data
];

export const getCourseByCode = (code: string): CourseData | undefined => {
  const normalized = code.replace(/\s+/g, '').toUpperCase();
  return allCourses.find(c => c.code.replace(/\s+/g, '').toUpperCase() === normalized);
};
