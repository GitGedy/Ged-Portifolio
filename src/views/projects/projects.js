import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import reasproject from "../../assets/projects/reascon.png";
import Haverim from "../../assets/projects/haverim.png";
import genanigeneral from "../../assets/projects/fenani.png";
import cbemgmt from "../../assets/projects/cbemgmgt.png";
import cbeweb from "../../assets/projects/cbeweb.png";
import cbestress from "../../assets/projects/cbestress.png";
import arifjobs from "../../assets/projects/arifjobs.png";

export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={reasproject}
            projectName={"REAS General Construction Website"}
            aboutProject={"Public website for L.Td Company"}
            techStack={"PHP, Laravel, Mysql"}
            projectLink="https://reascon.com/"
          />
          <ProjectCard
            projectImage={genanigeneral}
            projectName={"Fenani General trading Website"}
            aboutProject={"A public website for Fenani General Import and Exporters"}
            techStack={"EXPRESS JS, NODE JS, REACT JS, MySQL"}
            projectLink="https://fenanitrading.com/"
          />
          <ProjectCard
            projectImage={Haverim}
            projectName={"Haverim General construction website"}
            aboutProject={
              "A Public website for Haverim General Construction"
            }
            techStack={
              "React, NODE JS, MONGODB, BOOTSTRAP"
            }
            projectLink="https://haverimcon.com/"
          />
          <ProjectCard
            projectImage={cbemgmt}
            projectName={"CBE Trade Union Internal Management Solution"}
            aboutProject={"A management system for Commerical Bank of ethiopia employees trade union which contains ERP with all Accounting and Auditing solutions"}
            techStack={"Asp.net Core, React, MSSQL Server, IIS Server"}

          />
          <ProjectCard
            projectImage={cbeweb}
            projectName={"CBE Trade Union Public Website"}
            aboutProject={
              "Public website for Commercial bank of Ethiopia Trade union members and followers"
            }
            techStack={
              "Laravel, MySQL"
            }
            projectLink="http://cbetradeunion.cbe.com.et/"
          />
          <ProjectCard
            projectImage={cbestress}
            projectName={"CBE Risk Stress Testing Solution"}
            aboutProject={
              "A Stress Testing solution that provides a usefull information to evaluate the bank's financial health"
            }
            techStack={"React, ASP.Net Core, Materia UI, Tailwing, IIS Server"}
          />
        </SimpleGrid>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="Center"
          mt="40px"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<BLOGS AND PORTALS/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="50px"
          alignItems="center"
          justifyContent="center"
        >
          <ProjectCard
            projectImage={arifjobs}
            projectName={"Arifjobs Job Portal"}
            aboutProject={"This is a Job portal with a daily visitors more than 2.5K"}
            projectLink="https://arifjobs.com/"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
