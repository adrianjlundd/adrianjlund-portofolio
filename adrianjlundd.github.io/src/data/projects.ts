export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  
  {
    title: "TV2 Editorial ML",
    description:
      "A collaborative project between Cogito and TV2, leveraging historical data and machine learning to support better editorial decision-making. This involves time series forecasting, anomaly detection, clustering algorithms, and image and text embeddings.",
    tech: ["Python", "scikit-learn", "Pandas", "Embeddings"],
    links: [{ label: "About the project", href: "https://www.cogito-ntnu.no/projects/tv2xcogito" }],
  },
  
  {
    
    title: "Tic Tac Toe Computer Vision AR",
    description:
      "An interactive Tic Tac Toe game controlled entirely by hand gestures, built with Python, OpenCV, MediaPipe, and cvzone.",
    tech: ["Python", "scikit-learn", "CVzone","MediaPipe"],
    links: [{ label: "GitHub", href: "https://github.com/adrianjlundd/tic-tac-toe-computer-vision-AR" }],
  },

  {
    title: "Personal Info Dashboard",
    description:
      "A personal dashboard for displaying upcoming calendar events, bus departures, and weather information. Features automatic dark/light mode based on time of day",
    tech: ["Python", "Tkinter", "APIs"],
    links: [{ label: "GitHub", href: "https://github.com/adrianjlundd/Personal-info-screen" }],
  },
  {
    title: "Battleship (JavaFX)",
    description:
      "Two-player Battleship game with JavaFX UI, turn switching, and tested game logic.",
    tech: ["Java", "JavaFX", "JUnit"],
    links: [{ label: "GitHub", href: "https://github.com/USERNAME/battleship" }],
  },
  
  {
    title: "QuizGame Project IT1901",
    description:
      "A JavaFX-based quiz system built as a Maven multi-module project with a clean separation between domain logic, persistence, REST API, and user interface.",
    tech: ["Java", "JavaFX", "Maven"],
    links: [{ label: "GitHub", href: "https://github.com/adrianjlundd/Personal-info-screen" }],
  },
  {
    title: "Rock Paper Scissors Simulator",
    description:
      " Rock-Paper-Scissors world built with pygame. Agents (Rock, Paper, Scissors) move around the screen, bounce off edges, and convert each other on collision according to RPS rules. The simulation ends when only one species remains.",
    tech: ["Python", "Pygame"],
    links: [{ label: "GitHub", href: "https://github.com/adrianjlundd/Personal-info-screen" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=YI2b4zbsgaQ" }],
    
    
  }
  
];
