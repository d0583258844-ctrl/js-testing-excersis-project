Node.js Testing Project – hiking app

________________________________________
Section 1: Write Small Functions and Test Them
Context/Story: You’ve been hired by a small startup that builds tools for hikers. Your job is to create a few simple utility functions for their hiking route app and write tests to make sure they work properly.
Part A – Setup
1.	Create a new folder called hiking-utils.

2.	Inside it, create a file called distanceUtils.js.

3.	Create a second file called distanceUtils.test.js (this is where the tests will go).

4.	Initialize a new Node.js project using npm init -y.

5.	You will only use Node.js v22's built-in test runner, no extra libraries.

Part B – Your First Function (and Tests)
Task: Calculate distance in meters
●	Function name: kmToMeters

●	Input: a number representing kilometers

●	Output: the same value in meters

●	Example: 2 → 2000

Tasks:
1.	Think about edge cases: what happens if the input is 0? What if it’s negative?

2.	Write 2–3 unit tests for this function using the Node.js test runner.

________________________________________
Part C – Second Function: Estimate Calories Burned
Task: caloriesBurned(weightInKg, distanceInKm)
●	Input: weight of hiker (in kg), and distance walked (in km)

●	Output: estimated calories burned using a simple formula:

○	Formula: calories = weight * distance * 1.036

●	Example: caloriesBurned(70, 5) → roughly 362.6

Tasks:
1.	Write this function in calories.js.

2.	Write at least 3 tests:

○	A regular input.

○	Zero or negative weight.

○	A decimal distance like 3.5 km.

________________________________________
Section 2: Write Functions + Vanilla nodejs Server + Tests
Context/Story: The hiking app is adding a "check weather" feature. You need to write an API endpoint that checks if it’s safe to hike based on temperature and wind. The server should be written in vanilla nodejs.
Task: Hike Safety Checker
Express endpoint: POST /check-weather
Input JSON:
{
  "temperature": 25,
  "windSpeed": 15
}

Logic:
●	If the temperature is below 0°C or above 35°C, it's unsafe.

●	If the wind speed is over 50 km/h, it's unsafe.

●	Otherwise, it’s safe.

Output:
{
  "safe": true,
  "message": "All conditions are good for hiking!"
}

or
{
  "safe": false,
  "message": "Too windy to hike!"
}

Tasks:
1.	Create a new folder called weather-checker.

2.	Add a vanilla nodejs server with the above endpoint.

3.	Write a helper function (e.g., isSafeToHike) that takes temperature and wind speed and returns a { safe, message } object.

4.	Write 3 unit tests for isSafeToHike.

5.	Write 1 integration test that sends a request to /check-weather using Node.js's native fetch (v22 supports it) and verifies the response.

________________________________________
Section 3: Refactor with Confidence – The Value of Tests
Context/Story: The startup team realized that the wind safety threshold should be 60 km/h instead of 50. They ask you to change the logic. How can you be sure you didn’t break anything?
Plus, you are asked to refactor the vanilla nodejs server into an express server.
Task: Refactor and Trust Your Tests
What students should do:
1.	Refactor vanilla nodejs server to express server.

2.	Change the isSafeToHike logic to allow wind up to 60 km/h.

3.	Re-run the tests. They should all still pass. If not, find the bug and fix it.

4.	Add one more test for wind speed exactly 60 km/h – it should be safe now.
________________________________________
Section 4: TDD – Test-Driven Development in Node.js (v22+)
What is TDD?
TDD = Write a failing test → Make it pass → Clean it up
The 3 steps:
1.	Red: Write a test that fails because the function doesn’t exist or returns the wrong result.

2.	Green: Write just enough code to make the test pass.

3.	Refactor: Clean up the code (e.g., rename, simplify), but the test must still pass.

________________________________________
Task: Build a formatHikeName(name, location) Function Using TDD
Story: Every hike on your app has a title that combines the name and the location. You need to create a formatter function that produces a consistent string for display.
Requirements:
●	Inputs:

○	name: e.g. "Desert Trail"

○	location: e.g. "Negev"

●	Output: A string in the format: "Hike: Desert Trail (Negev)"

●	Edge case: If name or location is missing or empty → return "Invalid hike info".

________________________________________
Guided TDD Walkthrough
Step 1 – Create the Test File
1.	Make a file formatHikeName.test.js.

2.	In this file, write a test that assumes the function formatHikeName exists and returns the formatted string:

○	Example input: "Forest Loop", "Galilee"

○	Expected output: "Hike: Forest Loop (Galilee)"

This test will fail because the function doesn't exist yet. That’s the “Red” step of TDD. Use many different inputs. Will some input cause an error? Decide!
________________________________________
Step 2 – Create the Function
1.	Now create the file formatHikeName.js.

2.	Inside it, create the function formatHikeName, even if it just returns a placeholder string.

The goal: get the test to pass, even if it’s hardcoded or not reusable yet.
________________________________________
Step 3 – Improve the Function
1.	Once the test passes, modify the function to use the inputs correctly and dynamically.

2.	Now test again—still green? Good.
________________________________________
Second TDD Task: getWeatherCategory(temp)
Story: Hikers get confused with raw numbers. Add a helper function that categorizes temperature for display.
Requirements:
●	Input: number (temperature in °C)

●	Output:

○	Below 0 → "freezing"

○	0–15 → "cold"

○	16–25 → "cool"

○	26–35 → "warm"

○	Above 35 → "hot"

________________________________________
What Students Should Do (TDD Style):
1.	Write a test that checks input 10 → "cold" (it will fail).

2.	Write just enough logic to pass that test.

3.	Add another test for 38 → "hot" (fail → fix).

4.	Repeat for all ranges.

5.	Once all tests pass → cleanup/refactor if needed.




