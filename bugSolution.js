The issue is likely caused by an incorrect path to the custom font or a missing font file. Here's how to fix it:

1. **Verify Font Files:** Ensure your custom font files (.ttf or .otf) are placed in the `assets` folder of your project.  Expo needs this for proper asset management.
2. **Correct Font Family Name:** Double-check that the font family name used in your code (`font: 'my-custom-icon-font'` for example) exactly matches the font family name defined in your font files. This is usually case-sensitive.
3. **Import and Use:** Make sure you're importing and using the icon correctly within your components using the appropriate font family. For example: 
```javascript
import { Entypo } from '@expo/vector-icons'; // or your custom icon import

<Entypo name="location" size={24} color="black" family="my-custom-icon-font" />
```
4. **Check for typos in file names and paths**
5. **Clean and Rebuild:** Clean your project's cache and rebuild it. Sometimes cached files can interfere with proper asset loading.