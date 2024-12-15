```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect runs only on mount and unmount');
    return () => {
      console.log('Cleanup function runs on unmount');
    };
  }, []); // Empty dependency array - correct usage

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```