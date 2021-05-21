import { createSelector } from 'reselect';

const selectDirectory = (state) => state.directory;

export const SelectDirectorySection = createSelector([ selectDirectory ], (directory) => directory.sections);
