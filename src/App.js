import profile from "./assets/jv-landayan.jpg"; 
import mail from "./assets/mail-outline.svg"; 
import egg from "./assets/call-outline.svg"; 
import people from "./assets/people-outline.svg"; 
import phone from "./assets/call-outline.svg"; 
import github from "./assets/logo-github.svg"; 
import linkedin from "./assets/logo-linkedin.svg"; 
import twitter from "./assets/logo-twitter.svg";

import './App.css';

function App() {
  return (
		<div class="container mx-auto max-w-screen-xl">
			<main id="wrapper" class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl">
				<div
					id="sidebar"
					class="w-full sm:max-w-sm p-8 bg-gradient-to-b from-indigo-300 via-green-300 to-white"
				>
					<div class="px-2 mb-12">
						<img src={profile} alt="Profile Picture" class="rounded-full w-48 mx-auto mb-2" />
						<h1 class="text-center text-3xl font-semibold mb-2">Juaquin Victor Landayan</h1>
						<h2 class="text-center text-xl font-light">Information Technology Student</h2>
					</div>

					<div class="font-light text-lg px-2 mb-12">
						<h2 class="text-xl font-semibold mb-4">Contact</h2>
						<div class="flex items-center my-3">
							<img src={mail} class="inline w-6 mr-4" alt="Mail icon" />
							<a href="mailto:">jvlandayaaan@gmail.com</a>
						</div>
						<div class="flex items-center my-3">
							<img src={phone} class="inline w-6 mr-4" alt="Phone icon" />
							<a href="tel:">+63 977-390-7430</a>
						</div>
					</div>

					<div class="font-light text-lg px-2 mb-12">
						<h2 class="text-xl font-semibold mb-4">Personal</h2>
						<div class="flex items-center my-3">
							<img src={egg} class="inline w-6 mr-4" alt="Egg Icon" />
							<span>Born on 11th of September 1999</span>
						</div>
						<div class="flex items-center my-3">
							<img src={people} class="inline w-6 mr-4" alt="Two Persons Icon" />
							<span>Single</span>
						</div>
					</div>

					<div class="font-light text-lg px-2 mb-12">
						<h2 class="text-xl font-semibold mb-4">On the Web</h2>
						<div class="flex items-center my-3">
							<img src={github} class="inline w-6 mr-4" alt="GitHub Logo" />
							<a href="https://github.com/JVLandayan" target="_blank" rel="noopener noreferrer">
								GitHub
							</a>
						</div>
						<div class="flex items-center my-3">
							<img src={linkedin} class="inline w-6 mr-4" alt="LinkedIn Logo" />
							<a
								href="https://www.linkedin.com/in/jvlandayan/"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
						</div>
						<div class="flex items-center my-3">
							<img src={twitter} class="inline w-6 mr-4" alt="Twitter Logo" />
							<a href="https://twitter.com/jvlandayaaan" target="_blank" rel="noopener noreferrer">
								Twitter
							</a>
						</div>
					</div>

					<div class="font-light text-lg px-2 mb-12">
						<h2 class="text-xl font-semibold mb-4">Skills & Tools</h2>
						<ul class="list-none">
							<li>
								<label for="js-skill">C#</label>
								<progress id="js-skill" max="100" value="93"></progress>
							</li>
							<li>
								<label for="vue-skill">Angular</label>
								<progress id="vue-skill" max="100" value="90"></progress>
							</li>
							<li>
								<label for="react-skill">Design Patterns</label>
								<progress id="react-skill" max="100" value="80"></progress>
							</li>
							<li>
								<label for="nextjs-skill">.NET Framework</label>
								<progress id="nextjs-skill" max="100" value="93"></progress>
							</li>
							<li>
								<label for="eleventy-skill">TypeScript</label>
								<progress id="eleventy-skill" max="100" value="80"></progress>
							</li>

							<li>
								<div>Database</div>
								<p class="leading-8">
									<span class="rounded-xl bg-gray-300 px-3">MSSQL</span>
									<span class="rounded-xl bg-gray-300 px-3">Firebase</span>
									<span class="rounded-xl bg-gray-300 px-3">CosmosDb</span>
								</p>
							</li>
						</ul>
					</div>

					<div class="font-light text-lg px-2 mb-12">
						<h2 class="text-xl font-semibold mb-4">Education</h2>
						<h3 class="font-semibold">
							BS Information Technology Major in Web and Mobile Development
						</h3>
						<br></br>
						<p>2018 - Present | University Of Santo Tomas</p>
					</div>
				</div>
				<div class="content w-full p-12">
					<div id="profile" class="prose">
						<h2 class="section-headline">Bio note</h2>
						<p>
							JV Landayan is an aspiring full-stack engineer and soon to be software architect. He's
							enthusiastic in learning new things specially on how code can be optimized, how
							systems be developed to be scalable, maintainable and extendable. His current
							tech-stack in developing applications is Angular for the client-side and C# .Net for
							the server-side development.
						</p>
						<br></br>
						<p>
							He is a highly motivated individual who loves to spend time reading articles with
							regards to the current trends in web development. He is currently working on studying
							on how to make systems extensible and maintainable with the use of SOLID Design
							Principles
						</p>
					</div>
					<hr class="mt-8 mb-12" />
					<div id="experience" class="prose">
						<h2 class="section-headline">Experience</h2>
						<div>
							<h3>
								<b>Manulife</b>
							</h3>
							<section class="mb-6">
								<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
									March. 2022 - Present:
								</div>
								<div class="lg:inline-block lg:w-8/12 w-full">Fullstack Engineer Intern</div>
							</section>
						</div>
					</div>
					<hr class="mt-8 mb-12" />
					<div id="projects" class="prose">
						<h2 class="section-headline">Projects</h2>
						<div class="mb-16">
							<h3>
								<b>InternConnect</b>
							</h3>
							<section class="mb-6">
								<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Lead Developer</div>
								<div class="lg:inline-block lg:w-8/12 w-full">
									InternConnect is a platform for administrators inside the College of Information
									and Communications Sciences to ease the internship process of graduating students.
								</div>
							</section>
							<section class="mb-6">
								<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Deployed to:</div>
								<div class="lg:inline-block lg:w-8/12 w-full">
									<a
										href="https://internconnect-cics.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										InternConnect
									</a>
								</div>
							</section>
							<section class="mb-6">
								<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Back-end:</div>
								<div class="lg:inline-block lg:w-8/12 w-full">
									<a
										href="https://github.com/JVLandayan/InternConnect-API"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub/InternConnect-API
									</a>
								</div>
								<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Front-end:</div>
								<div class="lg:inline-block lg:w-8/12 w-full">
									<a
										href="https://github.com/batangchucks/InternConnect-ClientFinalv2"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub/InternConnect-ClientFinalv2
									</a>
								</div>
							</section>
							<section class="mb-6">
								<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Features:</div>
								<div class="lg:inline-block lg:w-8/12 w-full">
									<ul>
										<li>Image to Pdf Stamp</li>
										<li>PDF Generation</li>
										<li>Emailing System</li>
										<li>Role-based authentication</li>
										<li>Semi-SOLID design principles integrated server-side application</li>
										<li>SEO</li>
									</ul>
								</div>
							</section>

							<section class="mb-6">
								<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Built with:</div>
								<div class="lg:inline-block lg:w-8/12 w-full">
									<span class="rounded-xl bg-gray-300 px-3">Tailwindcss</span>
									<span class="rounded-xl bg-gray-300 px-3">Angular</span>
									<span class="rounded-xl bg-gray-300 px-3">C#</span>
									<span class="rounded-xl bg-gray-300 px-3">.NET Framework</span>
								</div>
							</section>
						</div>
					</div>
					<div id="projects" class="prose">
						<div class="mb-16">
							<h3>
								<b>Ecosystem</b>
							</h3>
							<section class="mb-6">
								<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Lead Developer</div>
								<div class="lg:inline-block lg:w-8/12 w-full">
									Ecosystem provides crud functionalities that updates the content of the website
									with its admin functionalities. It also lets the admin create author accounts that
									can add, update or delete articles and even customize their own profiles. This was
									a project made for eco-tigers.
								</div>
							</section>
							<section class="mb-6">
								<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Deployed to:</div>
								<div class="lg:inline-block lg:w-8/12 w-full">
									<a href="https://eco-tigers.com/" target="_blank" rel="noopener noreferrer">
										Eco-tigers
									</a>
								</div>
							</section>
							<section class="mb-6">
								<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Back-end:</div>
								<div class="lg:inline-block lg:w-8/12 w-full">
									<a
										href="https://github.com/JVLandayan/Ecosystems_API"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub/Ecosystems_API
									</a>
								</div>
								<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Front-end:</div>
								<div class="lg:inline-block lg:w-8/12 w-full">
									<a
										href="https://github.com/JVLandayan/Ecosystems_Client"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub/Ecosystems_Client
									</a>
								</div>
							</section>
							<section class="mb-6">
								<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Features:</div>
								<div class="lg:inline-block lg:w-8/12 w-full">
									<ul>
										<li>Role-based authentication</li>
										<li>Content Management System</li>
									</ul>
								</div>
							</section>

							<section class="mb-6">
								<div class="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">Built with:</div>
								<div class="lg:inline-block lg:w-8/12 w-full">
									<span class="rounded-xl bg-gray-300 px-3">Angular</span>
									<span class="rounded-xl bg-gray-300 px-3">C#</span>
									<span class="rounded-xl bg-gray-300 px-3">.NET Framework</span>
								</div>
							</section>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
