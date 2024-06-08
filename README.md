# COA TAKE-HOME CHALLENGE

## Table of Contents

1. [Project Description](#project-description)
2. [Setup Instructions](#setup-instructions)
3. [Usage](#usage)
4. [Coding Challenges](#coding-challenges)
   - [Challenge 1: Subarray with Target Sum](#challenge-1-subarray-with-target-sum)
   - [Challenge 2: String Transformation](#challenge-2-string-transformation)

## Project Description

This project contains two main parts:

1. **UI Challenge**: A web page with a responsive gallery that adjusts to different screen sizes.
2. **Coding Challenges**: Solutions to two algorithmic problems.

### UI Challenge

The web page displays a gallery of images with overlay text that reacts to hover event and when you click **Learn more** you will get a popup with a full sized image. The overlay text moves up smoothly on hover and disappears when the screen width is below 880px.

### Coding Challenges

- **Subarray with Target Sum**: Determine if there exists a contiguous subarray within an array that sums up to a target value.
- **String Transformation**: Transform a given string based on specific divisibility rules.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ben1-ai/COA-take-home-challenge.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd COA-take-home-challenge
   ```
3. **Open the `index.html` file in a web browser**.
4. **Browse through the photo gallery, hover over an image, and click "learn more" to view the image in full size**

## Usage

### Running UI challenge

1. Open the `index.html` file in a web browser.
2. Hover over the images to see the overlay text move up.
3. Click **Learn more** to see a full-sized image.
4. Resize the browser window to see the overlay text disappear when the width is below 880px.

## Deployment

**[Live](https://coa-take-home-challenge-mjbb.vercel.app/)**

## Coding Challenges

### Challenge 1: Subarray with Target Sum

Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return `true` if such a subarray exists, otherwise return `false`.

#### Example:

```javascript
const arr1 = [2, 3, 1, 4, 5];
const target1 = 8;
console.log(hasSubarrayWithSum(arr1, target1)); // Output: true

const arr2 = [6, 7, 8, 9, 10];
const target2 = 20;
console.log(hasSubarrayWithSum(arr2, target2)); // Output: false

```

### Challenge 2: String Transformation

Given a string, transform it based on the following rules:

- If the length of the string is divisible by 3, reverse the entire string.
- If the length of the string is divisible by 5, replace each character with its ASCII code.
- If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

#### Example:

```javascript
console.log(transformString('Waterfall')); // Output: "llafretaW"
console.log(transformString('Moon')); // Output: "77 111 111 110"
```
