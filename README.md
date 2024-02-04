# Calendar Web App Readme

This Calendar Web App is built using React, TypeScript, Vite, and TailwindCSS. It allows users to seamlessly manage their schedules and includes a feature that fetches holidays from [Calendarific](https://calendarific.com/). The app is hosted on https://calendar-itsroy69.vercel.app/

## Getting Started
1. Clone the repository: `git clone https://github.com/ItsRoy69/Calendar.git`
2. Install dependencies: `npm install`
3. Move to https://calendarific.com/ and get an API key for holidays. 
4. Include an environment file named `.env` and inside that include ```VITE_APP_KEY=``` with the API key
5. Run the development : `npm run dev`
6. Open your browser and visit `http://localhost:5173` to view the app.

## Testing
1. Used Jest for testing the webapp.
2. Since there is used "Jest" and website includes framework so include the secret API key in place of "import.meta.env.VITE_APP_KEY" in useHolidays.ts file to save from the unnecessary protection issue.
3. Run : `npm test`

## Live Demo
Visit the live demo https://calendar-itsroy69.vercel.app/
