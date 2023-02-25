import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMessage,
  faCalendar,
  faTag,
  faFile,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import ChatPage from "../pages/chat/ChatPage";
import PropertiesPage from "../pages/properties/PropertiesPage";
import { RouteType } from "./config";
import CalendarPage from "../pages/calendar/CalendarPage";
import OffersPage from "../pages/offers/OffersPage";
import DocumentsPage from "../pages/documents/DocumentsPage";
import SettingsPage from "../pages/settings/SettingsPage";
const routesConfig: RouteType[] = [
  {
    index: true,
    element: <PropertiesPage />,
    sidebarProps: {
      icon: <FontAwesomeIcon icon={faHouse} />,
      displayText: "Properties",
    },
  },
  {
    path: "/chat",
    element: <ChatPage />,
    sidebarProps: {
      icon: <FontAwesomeIcon icon={faMessage} />,
      displayText: "Chat",
    },
  },
  {
    path: "/calendar",
    element: <CalendarPage />,
    sidebarProps: {
      icon: <FontAwesomeIcon icon={faCalendar} />,
      displayText: "Calendar",
    },
  },
  {
    path: "/offers",
    element: <OffersPage />,
    sidebarProps: {
      icon: <FontAwesomeIcon icon={faTag} />,
      displayText: "Offers",
    },
  },
  {
    path: "/documents",
    element: <DocumentsPage />,
    sidebarProps: {
      icon: <FontAwesomeIcon icon={faFile} />,
      displayText: "Documents",
    },
  },
  {
    path: "/setting",
    element: <SettingsPage />,
    sidebarProps: {
      icon: <FontAwesomeIcon icon={faGear} />,
      displayText: "Settings",
    },
  },
];

export default routesConfig;
