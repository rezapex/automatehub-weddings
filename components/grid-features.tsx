import { cn } from "@/lib/utils";
import {
  IconWallet,
  IconAddressBook,
  IconUsers,
  IconClipboardList,
  IconCheckbox,
  IconGift,
  IconMail,
  IconBuilding,
  IconShirt,
  IconMusic,
  IconChefHat,
  IconCamera,
  IconCar,
  IconPlane,
  IconWorld,
  IconHeartHandshake,
  IconFileDescription,
  IconGlassFull,
  IconPaint,
  IconPencil,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "Budget Tracker",
      description: "Monitors expenses, sends alerts for overspending, suggests cost-cutting measures",
      icon: <IconWallet />,
    },
    {
      title: "Vendor Contact Manager",
      description: "Centralizes communication with vendors, tracks contracts, payments, and deadlines",
      icon: <IconAddressBook />,
    },
    {
      title: "Guest List Organizer",
      description: "Manages RSVPs, tracks meal choices, creates seating charts",
      icon: <IconUsers />,
    },
    {
      title: "Timeline Generator",
      description: "Creates a customized wedding day schedule based on user input",
      icon: <IconClipboardList />,
    },
    {
      title: "Checklist Creator",
      description: "Generates personalized to-do lists with reminders based on wedding date and preferences",
      icon: <IconCheckbox />,
    },
    {
      title: "Registry Aggregator",
      description: "Combines registries from multiple stores into one easy-to-manage list",
      icon: <IconGift />,
    },
    {
      title: "Invitation Designer",
      description: "Offers templates and customization options for digital or printable invitations",
      icon: <IconMail />,
    },
    {
      title: "Venue Finder",
      description: "Searches and compares venues based on location, capacity, and budget",
      icon: <IconBuilding />,
    },
    {
      title: "Attire Coordinator",
      description: "Tracks fittings, alterations, and accessories for the couple and wedding party",
      icon: <IconShirt />,
    },
    {
      title: "Music Playlist Builder",
      description: "Helps create ceremony and reception playlists, including must-play and do-not-play lists",
      icon: <IconMusic />,
    },
    {
      title: "Catering Menu Planner",
      description: "Assists in meal selection, tracks dietary restrictions, estimates quantities",
      icon: <IconChefHat />,
    },
    {
      title: "Photography Shot List Creator",
      description: "Generates a customized list of must-have photos for the photographer",
      icon: <IconCamera />,
    },
    {
      title: "Transportation Scheduler",
      description: "Plans and schedules transportation for the wedding party and guests",
      icon: <IconCar />,
    },
    {
      title: "Honeymoon Itinerary Planner",
      description: "Helps book flights, accommodations, and activities for the honeymoon",
      icon: <IconPlane />,
    },
    {
      title: "Wedding Website Template",
      description: "Provides customizable templates for a simple wedding website",
      icon: <IconWorld />,
    },
    {
      title: "Thank You Note Manager",
      description: "Tracks gifts received and generates thank you note templates",
      icon: <IconHeartHandshake />,
    },
    {
      title: "Legal Document Guide",
      description: "Provides checklists and information on required legal documents for marriage",
      icon: <IconFileDescription />,
    },
    {
      title: "Rehearsal Dinner Planner",
      description: "Assists with venue selection, guest list, and menu planning for the rehearsal dinner",
      icon: <IconGlassFull />,
    },
    {
      title: "DIY Project Guide",
      description: "Offers tutorials and supply lists for common DIY wedding projects",
      icon: <IconPaint />,
    },
    {
      title: "Vow Writing Assistant",
      description: "Provides prompts and examples to help couples write personal vows",
      icon: <IconPencil />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4 || index === 8 || index === 12 || index === 16) && "lg:border-l dark:border-neutral-800",
        index < 16 && "lg:border-b dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-black dark:text-white max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
