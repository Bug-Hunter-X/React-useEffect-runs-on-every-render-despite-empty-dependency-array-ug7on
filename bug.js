```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic.  The function is called every render.
    console.log('Effect runs on every render');
    return () => {
      console.log('Cleanup function runs on unmount or before next render');
    };
  }, []); // Empty dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```