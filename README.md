# Overview

React Maptalks provide a way to use Maptalks library in your react project. **It do not replace Maptalks**, instead make an abstraction of it objects like layers, handlers an containers to create components and hooks for React.

## How it works

To know how it works React Maptalks, we has divided in this concepts:

### Rendering

React Maptalks does not render the Maptalks elements to the DOM, just render a div container for instantiate the map an other elements inside them. The render work is done by Maptalks library directly.

### Element ref

When you use a  **React Maptalks component**, it instantiate internally the associated maptalks object and you can get access to this instance by passing a **get function** that you will see later in this documentation.

### Map element types

In a map instance you can have two element type: 

#### Geography element
Reprecent **spatial entities** like points, lines, polygons and markers, or **sets** of this like a Vector layer.

#### Decorator element
**It Dont reprecent spatial data**, just is used by displaying **additional information** of the geography element like the info window an tooltips. It should be noted that unlike to ui elements, it have associated a geography position inherit from geography element that its decorating.

### Context

React Maptalks create a **general context** for map instance and other **particular contexts** for **geography elements** inside the map. In this way its possible to relate a geography element with its children, for example a Vector Layer with its geometries, or a geometry with its tooltip.

### Events

React Maptalks abstracts the event interaction by ussing custom hooks that have expossed for the user.

## Documentation

Go to [React Maptalks Docs](https://migueloncoder.github.io/react-maptalks-doc/) to see more information