import {HiOutlineLightBulb, HiUsers} from "react-icons/hi";
import {FaTerminal, FaUserShield} from "react-icons/fa";
import {SlSpeedometer} from "react-icons/sl";
import {BsKanban} from "react-icons/bs";

export const skillsData = [
    {
        name: "Réaliser",
        description: "Permettre la polyvalence multi-plateformes des solutions informatiques, assurant ainsi une interopérabilité",
        subSkills: ["Pentesting", "ISO 27001", "Cryptography", "Firewalling"],
        icon: <FaTerminal/>
    },
    {
        name: "Administrer",
        description: "Monitorer, améliorer une solution informatique en assurant sa disponibilité, sa performance et sa sécurité",
        subSkills: ["Cisco CCNA", "VLAN", "VPN", "Routing/Switching"],
        icon: <FaUserShield/>
    },
    {
        name: "Collaborer",
        description: "Travailler et s'organiser sous forme d'une équipe en repartissant les tâches et responsabilités.",
        subSkills: ["Cisco CCNA", "VLAN", "VPN", "Routing/Switching"],
        icon: <HiUsers/>
    },
    {
        name: "Gérer",
        description: "Assurer la performance, l'intégrité et la sécurité des flux de données, de la base de données à l'application finale ",
        subSkills: ["Cisco CCNA", "VLAN", "VPN", "Routing/Switching"],
        icon: <SlSpeedometer/>
    },
    {
        name: "Conduire",
        description: "Mener à bien un projet en tenant des besoins des parties prenantes, et des spécificités liées à l'environnement technique.",
        subSkills: ["Cisco CCNA", "VLAN", "VPN", "Routing/Switching"],
        icon: <BsKanban/>
    },
    {
        name: "Optimiser",
        description: "Mettre en place les structures informatiques, logiques ou techniques, nécessaires à l'amélioration des processus ou pour résoudre un problème",
        subSkills: ["Cisco CCNA", "VLAN", "VPN", "Routing/Switching"],
        icon: <HiOutlineLightBulb/>
    }
];