ZeroRPC NodeJS Proof of Concept App
=
Node version of [this](https://github.com/jonmorehouse/python-zerorpc-app/)

Goals
-

-	Basic zero-rpc app up and running
-	Process based parellism to run multiple clients from one program
-	Write up some basic tests using Nose for this type of application
-	Build out a packeable app and write up a Docker cookbook

Resources
-
-	[child_process](https://nodejs.org/api/child_process.html)
-	[ZeroRPC](http://zerorpc.dotcloud.com/)
-	[Haproxy](http://www.haproxy.org)

Instructions
-

-	Install all dependencies

		`npm install`

-	Start up servers

		`node src/servers`

-	Test clients agains servers

		`node src/client -p 50001`
		`node src/client -p 50002`
		`node src/client -p 50003`

-	Start up haproxy / assuming haproxy is on your path

		`haproxy -f haproxy.cfg`

-	Test out haproxy client

		`node src/client -p 50000`