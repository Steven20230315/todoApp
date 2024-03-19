import { Form, Link, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import FormRow from '../components/FormRow';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useNavigation } from 'react-router-dom';
import axios from 'axios';

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	const errors = { msg: '' };
	if (data.password.length < 3) {
		errors.msg = 'Password must be at least 3 characters long';
		return errors;
	}
	try {
		await axios.post('/auth/login', data);
		// await customFetch.post('/auth/login', data);
		toast.success('Logged in successfully!');
		return redirect('/dashboard');
	} catch (error) {
		toast.error(error?.response?.data?.msg);
		return error;
	}
};

export default function Login() {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';

	return (
		<Wrapper>
			<h4>Login</h4>
			<Form method='post' className='form'>
				<div style={{ marginLeft: '8rem' }}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						xmlnsSvgjs='http://svgjs.dev/svgjs'
						version='1.1'
						width='50'
						height='50'
						viewBox='0 0 2000 1999'
					>
						<g transform='matrix(1,0,0,1,-0.431486880466764,-0.4312711370263287)'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								xmlnsXlink='http://www.w3.org/1999/xlink'
								viewBox='0 0 343 343'
								data-background-color='#ffffff'
								preserveAspectRatio='xMidYMid meet'
								height='1999'
								width='2000'
							>
								<g
									id='tight-bounds'
									transform='matrix(1,0,0,1,0.0740000000000407,0.07400000000001228)'
								>
									<svg
										viewBox='0 0 342.85155851775386 342.85155851775386'
										height='342.85155851775386'
										width='342.85155851775386'
									>
										<g>
											<svg />
										</g>
										<g>
											<svg
												viewBox='0 0 342.85155851775386 342.85155851775386'
												height='342.85155851775386'
												width='342.85155851775386'
											>
												<g>
													<path
														d='M0 171.426c0-94.676 76.75-171.426 171.426-171.426 94.676 0 171.426 76.75 171.426 171.426 0 94.676-76.75 171.426-171.426 171.426-94.676 0-171.426-76.75-171.426-171.426zM171.426 337.46c91.698 0 166.034-74.336 166.034-166.034 0-91.698-74.336-166.034-166.034-166.035-91.698 0-166.034 74.336-166.035 166.035 0 91.698 74.336 166.034 166.035 166.034z'
														data-fill-palette-color='tertiary'
														fill='#d33327'
														stroke='transparent'
													/>
													<ellipse
														rx='164.56874808852186'
														ry='164.56874808852186'
														cx='171.42577925887693'
														cy='171.42577925887693'
														fill='#d33327'
														stroke='transparent'
														strokeWidth='0'
														fillOpacity='1'
														data-fill-palette-color='tertiary'
													/>
												</g>
												<g transform='matrix(1,0,0,1,64.84655864529837,93.16605883391924)'>
													<svg
														viewBox='0 0 213.1584412271571 156.51944084991538'
														height='156.51944084991538'
														width='213.1584412271571'
													>
														<g>
															<svg
																viewBox='0 0 213.1584412271571 156.51944084991538'
																height='156.51944084991538'
																width='213.1584412271571'
															>
																<g>
																	<svg
																		viewBox='0 0 213.1584412271571 156.51944084991538'
																		height='156.51944084991538'
																		width='213.1584412271571'
																	>
																		<g transform='matrix(1,0,0,1,0,96.7352936937918)'>
																			<svg
																				viewBox='0 0 213.1584412271571 59.784147156123566'
																				height='59.784147156123566'
																				width='213.1584412271571'
																			>
																				<g id='textblocktransform'>
																					<svg
																						viewBox='0 0 213.1584412271571 59.784147156123566'
																						height='59.784147156123566'
																						width='213.1584412271571'
																						id='textblock'
																					>
																						<g>
																							<svg
																								viewBox='0 0 213.1584412271571 59.784147156123566'
																								height='59.784147156123566'
																								width='213.1584412271571'
																							>
																								<g transform='matrix(1,0,0,1,0,0)'>
																									<svg
																										width='213.1584412271571'
																										viewBox='0.9 -34.35 123.89 34.75'
																										height='59.784147156123566'
																										data-palette-color='#ffffff'
																									>
																										<path
																											d='M23.15-33.7L23.15-30.15 14.05-30.15 14.05 0 10 0 10-30.15 0.9-30.15 0.9-33.7 23.15-33.7ZM56.75-17L56.75-17Q56.75-9.05 52.67-4.33 48.6 0.4 41.65 0.4L41.65 0.4Q34.8 0.4 30.65-4.35 26.5-9.1 26.5-17L26.5-17Q26.5-24.95 30.57-29.65 34.65-34.35 41.6-34.35L41.6-34.35Q48.7-34.35 52.72-29.68 56.75-25 56.75-17ZM30.75-17L30.75-17Q30.75-10.75 33.72-7.1 36.7-3.45 41.65-3.45L41.65-3.45Q46.8-3.45 49.62-7.05 52.45-10.65 52.45-17 52.45-23.35 49.6-26.95 46.75-30.55 41.6-30.55L41.6-30.55Q36.5-30.55 33.62-26.93 30.75-23.3 30.75-17ZM73.14 0L73.14 0 62.95 0 62.95-33.7 72.94-33.7Q80.39-33.7 85.17-29.08 89.94-24.45 89.94-17.1L89.94-17.1Q89.94-9.8 85.52-4.9 81.09 0 73.14 0ZM72.89-30.1L72.89-30.1 67.05-30.1 67.05-3.55 73.09-3.55Q79.34-3.55 82.55-7.43 85.75-11.3 85.75-17.1L85.75-17.1Q85.75-22.6 82.17-26.35 78.59-30.1 72.89-30.1ZM124.79-17L124.79-17Q124.79-9.05 120.72-4.33 116.64 0.4 109.69 0.4L109.69 0.4Q102.84 0.4 98.69-4.35 94.54-9.1 94.54-17L94.54-17Q94.54-24.95 98.62-29.65 102.69-34.35 109.64-34.35L109.64-34.35Q116.74-34.35 120.77-29.68 124.79-25 124.79-17ZM98.79-17L98.79-17Q98.79-10.75 101.77-7.1 104.74-3.45 109.69-3.45L109.69-3.45Q114.84-3.45 117.67-7.05 120.49-10.65 120.49-17 120.49-23.35 117.64-26.95 114.79-30.55 109.64-30.55L109.64-30.55Q104.54-30.55 101.67-26.93 98.79-23.3 98.79-17Z'
																											opacity='1'
																											transform='matrix(1,0,0,1,0,0)'
																											fill='#ffffff'
																											data-fill-palette-color='quaternary'
																											id='text-0'
																										/>
																									</svg>
																								</g>
																							</svg>
																						</g>
																					</svg>
																				</g>
																			</svg>
																		</g>
																		<g transform='matrix(1,0,0,1,70.59288392808187,0)'>
																			<svg
																				viewBox='0 0 71.97267337099335 82.62169136976277'
																				height='82.62169136976277'
																				width='71.97267337099335'
																			>
																				<g>
																					<svg
																						xmlns='http://www.w3.org/2000/svg'
																						xmlnsXlink='http://www.w3.org/1999/xlink'
																						version='1.1'
																						x='0'
																						y='0'
																						viewBox='10.1 5.2 78.4 90'
																						enableBackground='new 0 0 100 100'
																						xmlSpace='preserve'
																						height='82.62169136976277'
																						width='71.97267337099335'
																						data-fill-palette-color='quaternary'
																						id='icon-0'
																					>
																						<polygon
																							fillRule='evenodd'
																							clipRule='evenodd'
																							fill='#ffffff'
																							points='88.5,28.2 68.4,59.9 68.5,22.3 '
																							data-fill-palette-color='quaternary'
																						/>
																						<polygon
																							fillRule='evenodd'
																							clipRule='evenodd'
																							fill='#ffffff'
																							points='49.8,5.2 67.2,38.5 34.7,19.6 '
																							data-fill-palette-color='quaternary'
																						/>
																						<polygon
																							fillRule='evenodd'
																							clipRule='evenodd'
																							fill='#ffffff'
																							points='67.8,38.3 67.8,22.3 60.8,24.5 '
																							data-fill-palette-color='quaternary'
																						/>
																						<polygon
																							fillRule='evenodd'
																							clipRule='evenodd'
																							fill='#ffffff'
																							points='88.2,73.2 50.6,71.7 83.2,52.9 '
																							data-fill-palette-color='quaternary'
																						/>
																						<polygon
																							fillRule='evenodd'
																							clipRule='evenodd'
																							fill='#ffffff'
																							points='69.1,60.3 82.8,52.3 77.4,47.4 '
																							data-fill-palette-color='quaternary'
																						/>
																						<polygon
																							fillRule='evenodd'
																							clipRule='evenodd'
																							fill='#ffffff'
																							points='48.7,95.2 31.5,61.9 63.9,80.9 '
																							data-fill-palette-color='quaternary'
																						/>
																						<polygon
																							fillRule='evenodd'
																							clipRule='evenodd'
																							fill='#ffffff'
																							points='50.5,72.2 64.2,80.2 65.8,73.1 '
																							data-fill-palette-color='quaternary'
																						/>
																						<polygon
																							fillRule='evenodd'
																							clipRule='evenodd'
																							fill='#ffffff'
																							points='10.1,72 30.5,40.4 30.1,78 '
																							data-fill-palette-color='quaternary'
																						/>
																						<polygon
																							fillRule='evenodd'
																							clipRule='evenodd'
																							fill='#ffffff'
																							points='30.9,62.1 30.8,78 37.8,75.8 '
																							data-fill-palette-color='quaternary'
																						/>
																						<polygon
																							fillRule='evenodd'
																							clipRule='evenodd'
																							fill='#ffffff'
																							points='11,27 48.5,28.9 15.8,47.3 '
																							data-fill-palette-color='quaternary'
																						/>
																						<polygon
																							fillRule='evenodd'
																							clipRule='evenodd'
																							fill='#ffffff'
																							points='30,40.1 16.1,47.9 21.5,52.9 '
																							data-fill-palette-color='quaternary'
																						/>
																						<polygon
																							fillRule='evenodd'
																							clipRule='evenodd'
																							fill='#ffffff'
																							points='48.2,28.3 34.5,20.2 32.9,27.4 '
																							data-fill-palette-color='quaternary'
																						/>
																					</svg>
																				</g>
																			</svg>
																		</g>
																		<g />
																	</svg>
																</g>
															</svg>
														</g>
													</svg>
												</g>
											</svg>
										</g>
										<defs />
									</svg>
									<rect
										width='342.85155851775386'
										height='342.85155851775386'
										fill='none'
										stroke='none'
										visibility='hidden'
									/>
								</g>
							</svg>
						</g>
					</svg>
				</div>
				<FormRow type='email' name='email' labelText='Email'></FormRow>
				<FormRow type='password' name='password' labelText='Password'></FormRow>
				<button type='submit' className='btn btn-block' disabled={isSubmitting}>
					{isSubmitting ? 'Loading...' : 'Login'}
				</button>
				{/* <button type='button' className='btn btn-block'>
					explore the app
				</button> */}
				<p>
					Not a member yet?{' '}
					<Link to='/register' className='member-btn'>
						Register
					</Link>
				</p>
			</Form>
		</Wrapper>
	);
}
