# Introduction

There are two target groups for this documentation:

- Developers that want to use the ch.paf.link schema in their software.
- Data users that want to understand the data published in ch.paf.link format.

For a deeper understanding of the ideas and basic principles behind the paf.link schema, please refer to the [paf.link documentation](https://paf.link).

## Interrelation with paf.link and PROV-O

ch.paf.link is and RDF ([[[rdf11-concepts]]]) data schema based on the [paf.link schema](https://paf.link) which in turn is based on [[[prov-o]]]. For a further understanding of the interrelation between these three layers, please refer to the [paf.link documentation](https://paf.link/#layered-design).

## Actual Use vs. Pure Schema

As the development of the ch.paf.link schema is an ongoing process, the schema itself might not always reflect the actual real world use of the schema. This documentation has accordingly the following goal:

- Explain the **actual use** with its differences to the "pure" schema and also link to real data in [LINDAS](https://ld.admin.ch).

## Basic Elements in paf.link

As in [[[prov-o]]] and paf.link, there are three basic elements that are used in ch.paf.link schema to describe public affairs:

- **activities** undertaken at a certain time or within a time span by
- **agents** (person or systems) that use
- **entities** as input information and for generating output information.

## Subclassing vs. Topic Classes

There are two main ways to extend the paf.link schema in ch.paf.link:

- **Subclassing**: Creating subclasses of existing classes in paf.link. An example is the class `chpaf:ParliamentaryAffairIdentifierEntity` which is a subclass of `paf:IdentifierEntity`.
- **Topic Classes**: This means using the paf.link classes as they are and adding a topic class in addition. An example would be a parliamentary identifier entity that would be typed as `paf:IdentifierEntity` *and* `chpaf:ParliamentaryAffair`. The main advantage of this approach is that it does not need many new subclasses (only one new topic class). The main disadvantage is if such data needs to be used in a system that only allow one type per resource. In this case, the classes would have to be mapped to a single type (e.g. `ParliamentaryAffairIdentifierEntity`).
