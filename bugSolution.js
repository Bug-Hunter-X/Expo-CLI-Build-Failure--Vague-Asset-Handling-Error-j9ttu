After carefully reviewing every asset included in my project, I discovered a naming conflict. I had two images with almost identical names, differing only in capitalization. Expo's build process seems to be sensitive to such minor discrepancies. Renaming one of the images to have a unique name solved the problem. In addition, double-checking the file paths for all assets is important to ensure that they are correctly referenced and accessible to the Expo build system.  To avoid similar issues in the future, always use unique and consistent file names. Use a linter to check for naming and file path inconsistencies.