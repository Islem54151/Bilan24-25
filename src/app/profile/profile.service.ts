import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Learning the Basics of SAP Fiori',
      desc: '',
     
      githurl: 'https://www.credly.com/badges/80d56809-ba3a-43f4-8f23-c64467bf602f/linked_in_profile',
    
      imgUrl: 'assets/images/z1.png'
      
    },

    {
      id: 2,
      title: 'Introduction to SAP',
      desc: '',
    
      githurl: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-sap?utm_source=linkedin&utm_medium=linkedin&utm_campaign=linkedin_certificate_share&utm_source_page=public_certificate_view&referrer_code=GLSTZ0KWILNQU',
      
      imgUrl: 'assets/images/z26.png'
      
    },


    {
      id: 3,
      title: 'Jira Fundamentals Badge',
      desc: '',
     
      githurl: 'https://university.atlassian.com/student/award/z2cwZkTsvyy25yKBPvXfZL4v',
     
      imgUrl: 'assets/images/z27.png'
    },

    {
      id: 4,
      title: 'SAP S/4HANA Conversion and SAP System Upgrade',
      desc: '',
      
      githurl: 'https://learning.sap.com/courses/sap-s-4hana-conversion-and-sap-system-upgrade',
     
      imgUrl: 'assets/images/z23.png'
      
    },


    {
      id: 5,
      title: 'Managing the SAP System Landscape (SAP LAMA)',
      desc: '',
      
      githurl: 'https://learning.sap.com/learning-journeys/managing-the-sap-system-landscape',
     
      imgUrl: 'assets/images/z4.png',
      
    },



    {
      id: 6,
      title: 'Preparing the System for an Upgrade or Update with Zero Downtime Option',
      desc: '',
     
      githurl: 'https://learning.sap.com/learning-journeys/leverage-sap-s-4hana-updates-and-upgrades-with-zero-downtime-option-of-sum/preparing-the-system-for-an-upgrade-or-update-with-zero-downtime-option_bbadacdf-7d14-4f35-8ab2-1fc60a024afe',
      
      imgUrl: 'assets/images/z4.png'
     
    },



   

  ]
  about2 = `Consultante SAP Basis avec deux ans d’expérience. .
  Actuellement en formation d’ingénierie en génie logiciel .
   Compétences acquises en formation 
Développement web, DevOps, CI/CD, réseaux, cloud et virtualisation.`

  about = ""
  resumeurl = "https://docs.google.com/document/d/14v6kp6DS-a7wQaNmaorN6wW8cgVzEQeasrS8quCjhBE/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Projets DevOps : Jenkins, SonarQube, Docker, Nexus, Prometheus, Grafana, Docker Hub, Vagrant ',
      'progress': '95%'
    },
{
  id: '2',
  skill: 'Projets CI/CD : Kafka, Feign Client, intégration Microsoft Edge, Docker, authentification SSO via Keycloak, shared libraries, Spring Boot, Eureka, API-Gateway, Config server',
  progress: '80%'
}

,
    {
      'id': '3',
      'skill': 'Administration réseau et sécurité des systèmes Unix',
      'progress': '90%'
    },
    {
      'id': '4',
      'skill': 'Réseaux TCP/IP',
      'progress': '80%'
    },
    {
      'id': '5',
      'skill': 'Communication Anglais',
      'progress': '50%'
    },
    {
      'id': '6',
      'skill': 'Virtualisation et Cloud ',
      'progress': '85%'
    },

    {
      'id': '7',
      'skill': 'Communication Français',
      'progress': '50%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering',
      'info': `Aditya Silver Oak Institute is GTU Affiliated and ranks 7th in Gujurat
Completed B.E in Computer Engineering with 9.54 CGPA.
Won the Best Student Award 3 times for excellent Academic records at College.
Maintained above 9.1 spi in every semester of college academic .`,
      'institution': 'ADITYA SILVER OAK INSTITUTE OF TECHNOLOGY, AHMEDABAD'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
  id: 4,
  company: 'Les missions ou activités les plus importantes de mon poste',
  timeline: 'Juillet 2024 à juillet 2025',

  work: `Mise à niveau des systèmes S/4HANA en haute disponibilité (HA).
System rename et refresh des systèmes S/4HANA .
Gestion de Fiori Launchpad (Spaces, Pages) .
Support technique et résolution d’incidents .
Installation et configuration de Content Server .
Administration de bases de données HANA, Sybase`
},
    {
      id: 3,
      company: 'Les missions ou activités de mon poste, je réussis particulièrement bien',
      work: `
Upgrade des systemes S4/HANA HA .
Gestion Fiori .
Administration base de données .
Gestion des rôles et des autorisations .
Troubleshooting et monitoring 
 
`
    },
  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },

    {
      id: 1,
      company: 'les missions ou activités de mon poste, celles où je suis parfois moins à laise',
      
      work: `  
Je suis parfois moins à l’aise avec les tâches répétitives, car elles offrent peu de nouveauté ou d’apprentissage.
J’aimerais participer à plus de projets variés et techniques pour développer mes compétences et rester motivée.

  `
    },


  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Mehul Kothari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/mehulk05/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
