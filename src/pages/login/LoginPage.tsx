import * as React from 'react';
import { Button } from '@tremor/react';
import 'styled-components/macro';
import AppBar from '../../components/organisms/appbar/AppBar';
import Footer from '../../components/organisms/footer/Footer';

const LoginPage: React.FC = () => {
	return (
		<>
			<AppBar />
			<section className='text-gray-600'>
				<div className='container px-5 py-24 mx-auto flex flex-wrap items-center min-h-screen'>
					<div className='lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0'>
						<h2 className='text-gray-900 text-lg font-medium title-font mb-5'>
							Sign In
						</h2>
						<div className='relative mb-4'>
							<label htmlFor='full-name' className='leading-7 text-sm text-gray-600'>
								Full Name
								<input
									type='text'
									id='full-name'
									name='full-name'
									className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								/>
							</label>
						</div>
						<div className='relative mb-4'>
							<label htmlFor='email' className='leading-7 text-sm text-gray-600'>
								Email
								<input
									type='email'
									id='email'
									name='email'
									className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
								/>
							</label>
						</div>
						<Button
							text='Button'
							color='indigo'
							tw='bg-indigo-600'
							importance='primary'
						/>
						<p className='text-xs text-gray-500 mt-3'>
							Literally you probably heard of them jean shorts.
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default LoginPage;
