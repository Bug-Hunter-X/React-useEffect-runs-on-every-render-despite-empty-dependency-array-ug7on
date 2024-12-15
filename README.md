# React useEffect Runs on Every Render Despite Empty Dependency Array

This repository demonstrates a common error in React's `useEffect` hook where the effect runs on every render even when an empty dependency array `[]` is specified. This happens due to actions within the effect causing unnecessary re-renders, creating an infinite loop. The solution involves refactoring the effect to remove any side-effects or state updates that trigger re-renders. 