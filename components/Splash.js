// components/Splash.js

import { Container, Wrapper, Row } from "./Containers";
import { Logo } from "./Logo";
import { Hero } from "./Hero";
import { List } from "./List";
import { Cta } from "./Cta";
import { Mission } from "./Mission";

const components = {
  hero: Hero,
  list: List,
  cta: Cta,
  mission: Mission,
};

export const Splash = ({ data }) => {
  if (!Array.isArray(data)) return null;
  const [logo, ...restComponents] = data;

  return (
    <Wrapper>
      <Container>
        {logo && (
          <Logo
            key={logo?.id}
            data={logo.blocks}
            filter={logo?.fields?.filter}
          />
        )}
        <Row>
          {restComponents.map((section) => {
            const Component = components[section?.fields?.type];

            if (section?.fields?.type.includes("hero")) {
              return (
                <Component
                  key={`${section?.id}-${section?.order}`}
                  data={section?.blocks}
                  filter={section?.fields?.filter}
                />
              );
            }
            if (section?.fields?.type.includes("list")) {
              return (
                <Component
                  key={`${section?.id}-${section?.order}`}
                  data={section?.blocks}
                  filter={section?.fields?.filter}
                />
              );
            }
            if (section?.fields?.type.includes("cta")) {
              return (
                <Component
                  key={`${section?.id}-${section?.order}`}
                  data={section?.blocks}
                  filter={section?.fields?.filter}
                />
              );
            }
            if (section?.fields?.type.includes("mission")) {
              return (
                <Component
                  key={`${section?.id}-${section?.order}`}
                  data={section?.blocks}
                  filter={section?.fields?.filter}
                />
              );
            }
            return null;
          })}
        </Row>
      </Container>
    </Wrapper>
  );
};