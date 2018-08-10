// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]



function matrix(n) {
    
    let x = 0 // row index
    let y = 0 // column index
    let count = 1 // initial value in the spiral: count goes from 1 to n*n
    let topPerimeter = 0 //top boundary for the matrix moves as the spiral moves
    let frontPerimeter = 0 //front boundary for the matrix moves as the spiral moves
    let bottomPerimeter = n - 1 //bottom boundary for the matrix moves as the spiral moves
    let backPerimeter = n - 1 //back boundary for the matrix moves as the spiral moves
    let size = n * n // terminating value for spiral matrix
    let newArray = [] // the spiral matrix

    // These indicate which direction is being traversed through the matrix
    let goingRight = true
    let goingUp = false
    let goingDown = false
    let goingLeft = false


    //initialize the array
    for (let i = 0; i < n; i++) {
        newArray.push([])
    }

    //traverse the array setting the appropriate location to count
    while (count <= size) {
        newArray[x][y] = count //setting value
        count++ // incrementing count


        //traverse the array
        //only moving the x or y index depending on the direction
        //once the perimeter is reached, change direction and 
        //move the reached perimeter inwards, so the previously set values
        //are not reset and the locations spiral inward 
        if (goingRight) {
            if (y == backPerimeter) {
                goingRight = false
                goingDown = true
                topPerimeter++
                x++
            } else { 
                y++ 
            }

        } else if (goingDown) {
            if (x == bottomPerimeter) {
                goingLeft = true
                goingDown = false
                backPerimeter--
                y--
            }
            else {
                 x++ 
                }
        }
        else if (goingLeft) {
            if (y == frontPerimeter) {
                goingLeft = false
                goingUp = true
                bottomPerimeter--
                x--
            }
            else { 
                y-- 
            }
        } else if (goingUp) {
            if (x == topPerimeter) {
                goingUp = false
                goingRight = true
                frontPerimeter++
                y++
            } else {
                x--
            }
        }

    }

    return newArray
 
}

module.exports = matrix;
