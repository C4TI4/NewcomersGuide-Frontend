
import { useState } from 'react';
import { Input, Button, Card, Link } from '@nextui-org/react';
import { loginUser } from '../lib/bdClient';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await loginUser(email, password);
      console.log('User Data:', userData);
      navigate('/home');
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const handleNavigate = () => {
    navigate('/signup');
  };
  return (
    <div className='flex flex-center items-center h-full mt-8' >
      <Card shadow className="w-96 h-96 p-5 mx-auto my-auto">
        <h2 className='font-bold text-lg'>Login</h2>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='my-8'
          />
          <Input
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-8'
          />
          <p className='text-right text-sm my-4'>No account yet? <Link onClick={handleNavigate} className='text-sm cursor-pointer'> SignUp for free</Link></p>
          <Button color="danger" className='my-4 px-8' type="submit" block>
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;