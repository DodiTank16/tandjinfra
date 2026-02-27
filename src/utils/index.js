import CivilWorkService1 from "../assets/images/Indiamart/ServicePhotos/CIVIL WORK/CivilWorks1.jpg";
import CivilWorkService2 from "../assets/images/Indiamart/ServicePhotos/CIVIL WORK/CivilWorks2.jpeg";
import CivilWorkService3 from "../assets/images/Indiamart/ServicePhotos/CIVIL WORK/CivilWorks3.jpeg";
import CivilWorkService4 from "../assets/images/Indiamart/ServicePhotos/CIVIL WORK/CivilWorks4.jpeg";

import TechnicalAssistance1 from "../assets/images/Indiamart/ServicePhotos/Cable Laying/TechnicalAssistance1.jpg";
import TechnicalAssistance2 from "../assets/images/Indiamart/ServicePhotos/Cable Laying/TechnicalAssistance2.jpg";
import TechnicalAssistance3 from "../assets/images/Indiamart/ServicePhotos/Cable Laying/TechnicalAssistance3.jpg";
import TechnicalAssistance4 from "../assets/images/Indiamart/ServicePhotos/Cable Laying/TechnicalAssistance4.jpg";

import OilGasPipeline1 from "../assets/images/Indiamart/ServicePhotos/OilandGas/OilGas1.jpg";
import OilGasPipeline2 from "../assets/images/Indiamart/ServicePhotos/OilandGas/OilGas2.JPG";
import OilGasPipeline3 from "../assets/images/Indiamart/ServicePhotos/OilandGas/OilGas3.jpg";

import SiphonicSystem1 from "../assets/images/Indiamart/ServicePhotos/Syphone system/SyphoneSystem1.jpeg";
import SiphonicSystem2 from "../assets/images/Indiamart/ServicePhotos/Syphone system/SyphoneSystem2.jpeg";
import SiphonicSystem3 from "../assets/images/Indiamart/ServicePhotos/Syphone system/SyphoneSystem3.jpeg";
import SiphonicSystem4 from "../assets/images/Indiamart/ServicePhotos/Syphone system/SyphoneSystem4.jpeg";

import HDPEPipingSystem1 from "../assets/images/Indiamart/ServicePhotos/HDPE PIPE INSTALLTION/HDPEPipingSystem1.jpg";
import HDPEPipingSystem2 from "../assets/images/Indiamart/ServicePhotos/HDPE PIPE INSTALLTION/HDPEPipingSystem2.jpeg";
import HDPEPipingSystem3 from "../assets/images/Indiamart/ServicePhotos/HDPE PIPE INSTALLTION/HDPEPipingSystem3.jpeg";
import HDPEPipingSystem4 from "../assets/images/Indiamart/ServicePhotos/HDPE PIPE INSTALLTION/HDPEPipingSystem4.jpeg";

export const ALL_NAV = [
  { label: "Home", path: "/" },
  // { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const SERVICES = [
  {
    label: "Civil Work Service",
    desc: "Comprehensive civil engineering solutions including excavation, foundation, structural development, and infrastructure execution.",
    images: [CivilWorkService1, CivilWorkService2, CivilWorkService3, CivilWorkService4],
    path: "/services",
  },
  {
    label: "Technical Assistance",
    desc: "Expert technical support, project supervision, consulting, and on-site engineering assistance.",
    images: [TechnicalAssistance1, TechnicalAssistance2, TechnicalAssistance3, TechnicalAssistance4],
    path: "/services",
  },
  {
    label: "Solar Plant Installation",
    desc: "End-to-end solar plant setup including planning, installation, commissioning, and maintenance.",
    images: ["/images/services/solar/1.jpg", "/images/services/solar/2.jpg", "/images/services/solar/3.jpg"],
    path: "/services",
  },
  {
    label: "Oil & Gas Pipeline Project",
    desc: "Pipeline engineering, installation, testing, and commissioning for oil and gas infrastructure.",
    images: [OilGasPipeline1, OilGasPipeline2, OilGasPipeline3],
    path: "/services",
  },
  {
    label: "Siphonic System for Water & Rain",
    desc: "Advanced siphonic drainage systems designed for efficient rainwater and water management in large infrastructures.",
    images: [SiphonicSystem1, SiphonicSystem2, SiphonicSystem3, SiphonicSystem4],
    path: "/services",
  },
  {
    label: "MDPE-HDPE Pipeline Installation Project",
    desc: "Professional installation of MDPE and HDPE pipelines for gas, water, and industrial infrastructure projects.",
    images: [HDPEPipingSystem1, HDPEPipingSystem2, HDPEPipingSystem3, HDPEPipingSystem4],
    path: "/services",
  },
];
