import react from "react";

import GoProjectsButton from "./GoProjectsButton";

const PrincipalSection = () => (
	<div className="px-4">
		<GoProjectsButton />
		
        <div className="py-8">
			<h1 className="mb-4 text-6xl md:text-9xl text-yellow-400">Diego</h1>
            <h1 className="text-6xl md:text-9xl text-blue-800">Cardona</h1>
            <h2 className="mt-4 md:mt-8 text-3xl md:text-6xl text-red-600 flex gap-4 content-center">Front-end developer <img className="w-8 md:w-16" src="/static/icons/colombia-flag.svg" /></h2>
		</div>
            
		<div className="space-y-4 text-justify">
			<p>In general, I consider myself someone with a lot of potential to do whatever I want. I am a born leader and I enjoy learning and I am very imaginative, so much so that sometimes I go too far from "reality".</p>

            <p>I think my gift goes beyond technical things, although I have my moments of introversion, I consider myself someone with a lot of connection and understanding for others.</p>

            <p>I have always had a great connection with machines and computers, in particular, I would say that in 2014 was when I began to get very into programming hand in hand with games like Minecraft and SAMP (GTA Multiplayer) creating servers and programming things. I still remember a lot that around that time I began to create things in Minecraft like that from a command (huge) a house would appear and things like that, I made a lot of videos with things like that and had about 10,000 views in each YouTube video.</p>
			
			<p>Also I remember that one video got 41.000 views because I was one of the first persons introducing One-command block things to the Latin American community.</p>

            <p>In 2018 I received a Front-end Architect certificate at <a href="https://www.platzi.com" target="_blank" className="text-blue-600 font-bold">https://www.platzi.com</a> and this is the only certificate I have because I have developed myself by watching other people's code, programming and learning on my own. <a href="/static/Platzi-front-end.pdf" target="_blank" className="border border-black px-2 hover:bg-blue-200">Click to see the certificate</a></p>

            <p>I am self-taught and I am very proud of it because I learn at the same time as I do and I really enjoy doing things, my brain is very wild in that sense. I think doing things like this has allowed me to shape my thinking and learn things that can only be learned by doing and doing.</p>
				
			<div className="grid md:grid-cols-2 gap-4">
				<div className="border border-black p-4">
					<img src="/static/images/sections/principal/minecraft.png" className="mb-4" />
					<p>This is a Minecraft One-Command block "thing". As you can see, there is a extrange construction which was made from copy and pasting one command. Which of course I programmed</p>
				</div>
				<div className="border border-black p-4">
					<img src="/static/images/sections/principal/samp.jpg" className="mb-4" />
					<p>That image is not mine but I made things like this with a programming language called PawnScript, used in GTA SAMP. This is an inventory system which works as you spected to.</p>
				</div>
			</div>
        </div>
    </div>
);

export default PrincipalSection;