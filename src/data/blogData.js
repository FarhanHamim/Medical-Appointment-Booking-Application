const blogData = [
  {
    id: 1,
    title: "Understanding useState in React",
    content: `useState is a React Hook that allows functional components to manage state. It returns an array containing the current state value and a function to update it.

How useState works:

const [count, setCount] = useState(0);

Key Points:
- First value (count) is your state variable
- Second value (setCount) is the function to update state
- Initial value is passed as argument to useState

Features:
1. State updates are asynchronous
2. Multiple updates in same render are batched
3. Previous state can be referenced using callback form

Best Practices:
• Use separate state variables for unrelated data
• Use callback form when new state depends on old state
• Don't call hooks inside conditions or loops

Example:
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`
  },
  {
    id: 2,
    title: "The Purpose of useEffect in React",
    content: `useEffect lets you perform side effects in React components. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.

Common Uses:
1. Data fetching
2. Subscriptions
3. DOM manipulations
4. Event listeners
5. Cleanup operations

How to use useEffect:
useEffect(() => {
  // Effect code
  return () => {
    // Cleanup code
  };
}, [dependencies]);

Key Concepts:
• Empty dependencies array: Effect runs once after mount
• No dependencies array: Effect runs after every render
• With dependencies: Effect runs when dependencies change

Example:
function UserProfile({ userId }) {
  useEffect(() => {
    // Subscribe to user data
    const subscription = api.subscribe(userId);
    // Cleanup function
    return () => subscription.unsubscribe();
  }, [userId]);
}`
  },
  {
    id: 3,
    title: "Custom Hooks in React",
    content: `Custom Hooks are JavaScript functions that use other React Hooks to share logic between components. They always start with 'use' prefix.

When to Create Custom Hooks:
1. Share logic between components
2. Remove duplicate code
3. Make code more organized
4. Separate concerns

Rules:
• Must start with 'use'
• Can call other Hooks
• Should be pure JavaScript functions
• Can return any value

Example Custom Hook:
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}`
  },
  {
    id: 4,
    title: "Controlled vs Uncontrolled Components",
    content: `Controlled and uncontrolled components are two different approaches to handling form inputs in React.

Controlled Components:
• Form data controlled by React state
• Each state mutation has an handler function
• More predictable but requires more code
• Immediate access to form data

Example:
function ControlledInput() {
  const [value, setValue] = useState('');
  return (
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}

Uncontrolled Components:
• Form data handled by DOM
• Use refs to get values
• Less code but harder to validate
• Values accessed on submit

Example:
function UncontrolledInput() {
  const inputRef = useRef();
  return <input ref={inputRef} defaultValue="default" />;
}

When to Use Each:
Controlled Components:
- Need immediate validation
- Need to disable submit button
- Need to enforce input format
- Multiple inputs for one data point

Uncontrolled Components:
- Simple forms
- Integration with non-React code
- When performance is critical`
  },
  {
    id: 5,
    title: "Understanding useFormStatus in React",
    content: `useFormStatus is a new React Hook that helps manage form submission states in React Server Components.

Key Features:
1. Tracks form submission state
2. Shows loading states
3. Works with Server Actions
4. Prevents multiple submissions

Example Usage:
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

Benefits:
• Better user experience
• Automatic state management
• Works with progressive enhancement
• Server-side integration

Best Practices:
1. Use in submit buttons
2. Show loading states
3. Handle errors properly
4. Give user feedback`
  }
];

export default blogData;