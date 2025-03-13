
/**
 * @param {MouseEvent} event
*/
function onError(event) {
    const parent = event.target.parentElement;
    const imageObscured = event.target.closest('.lazySpoiler');

    const imgFailed = () => {
        if (new RegExp(`\\b(${["lazyContainer"].join("|")})\\b`).test(parent.className)) {
            parent.classList.add("img-failed");
        } else {
            event.target.classList.add("img-failed");
        }
    }

    if (event.target.tagName.toLowerCase() === 'img') {
        if (["embedImage"].includes(event.target.className)) {
            event.target.src = 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwNCIgd2lkdGg9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PG1hc2sgaWQ9ImEiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Im0wIDg2di04NS42NmgxODYuMDkydjg1LjY2eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9tYXNrPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48cGF0aCBkPSJtLjguOTk4aDQ3LjAydjQ4LjUyNGgtNDcuMDJ6IiBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L21hc2s+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJtOTIuODI0IDc1LjE0YzQuNDE0LTMuMzM3IDEwLjU5Ny0zLjM2IDE1LjAzNy0uMDYuNDUuMzMuNTguOTgzLjI1IDEuNDI1LS4zMy40NDUtLjkxLjU2Ni0xLjM2LjI0bC0uMDctLjA1NmMtMy43My0yLjc4LTguOTMtMi43Ni0xMi42NC4wNC0uMTguMTMtLjM5LjItLjYuMi0uMyAwLS42LS4xNC0uOC0uNC0uMzMtLjQ0LS4yNC0xLjA3LjItMS40bS0xNS42NzEtMTcuNzI5YzIuODgyIDAgNS4yMTggMi4zMzUgNS4yMTggNS4yMTcgMCAyLjg4LTIuMzM2IDUuMjE1LTUuMjE3IDUuMjE1LTIuODggMC01LjIxLTIuMzM2LTUuMjEtNS4yMTYgMC0yLjg4MyAyLjM0LTUuMjIgNS4yMi01LjIybTQ2Ljk2IDBjMi44OCAwIDUuMjIgMi4zMzcgNS4yMiA1LjIyIDAgMi44OC0yLjMzIDUuMjE1LTUuMjEgNS4yMTVzLTUuMjEtMi4zMy01LjIxLTUuMjEgMi4zNC01LjIyIDUuMjItNS4yMm04LjA2IDE3LjUzYy40OS0uMDYuOTgtLjE2IDEuNDYtLjI4LjU0LS4xNCAxLjA5LjE3IDEuMjMuNzEuMTUuNTMtLjE3IDEuMDgtLjcgMS4yMy0uNTYuMTUtMS4xNS4yNy0xLjczLjM0LS4wNC4wMS0uMDguMDEtLjEyLjAxLS40OSAwLS45My0uMzctLjk5LS44Ny0uMDctLjU0LjMyLTEuMDQuODctMS4xMW0tNDkuMTgxLTU1LjY0MWMtMi44MzYuNjgyLTQuNTcgMS4yOS00Ljk2MyAxLjQzbC0uMDYzLjAzYy0zLjU0IDEuNDMtNS44MyA0LjgyMi01LjgzIDguNjM2IDAgMi4wOTYuNzIgNC4xIDIuMDggNS43OTcuMDEuMDEuMDE0LjAyMy4wMi4wMy4wMDQuMDA3LjAxLjAxLjAxNC4wMTQuMDI4LjAzOCAyLjc4IDMuNzY3IDcuNzMgNC4xNi41NS4wNDIuOTYuNTI0LjkxNyAxLjA3NS0uMDQuNTIzLS40NzcuOTItLjk5NC45Mi0uMDIgMC0uMDUgMC0uMDgtLjAwMi00LjY1LS4zNy03LjU5LTMuMTM1LTguNy00LjM4MmwtMS4xMy40MjNjLS4wNC4wMi0uMDguMDQtLjEyLjA1LTYuMzEgMi4zNi0xMC4zOSA3LjkyLTEwLjM5IDE0LjE3IDAgMi42MS43NCA1LjIgMi4xMyA3LjQ4LjE1LjI1LjE5LjU1LjExLjgyLS4wOC4yOC0uMjguNS0uNTQuNjItNy43NCAzLjQ3LTEyLjc0IDExLTEyLjc0IDE5LjIgMCAxMS43MSA5LjgzIDIxLjIzIDIxLjkgMjEuMjMgNy45NyAwIDE2Ljc2LTEuNTMgMjYuMTMtNC41Ni43NC0uMzIgOS43LTQuMTIgMjIuNDQtMy41NS41NS4wMy45OC40OS45NiAxLjA1cy0uNDcgMS4wMS0xLjA0Ljk2Yy04Ljc3LS4zOS0xNS43OCAxLjQxLTE5LjI0IDIuNTUgNi40NiAyLjM3IDE1LjY5IDMuNTggMjcuNSAzLjU4IDEwLjY4IDAgMTkuMzctOC42OCAxOS4zNy0xOS4zNyAwLTQuOTktMS45Ny05Ljc4LTUuNDMtMTMuMzgtLjc5IDEuODYtMi41MiA0Ljk2LTUuNzMgNi45NS0uMTYuMS0uMzQuMTUtLjUyLjE1LS4zMyAwLS42Ni0uMTctLjg1LS40Ny0uMjktLjQ3LS4xNC0xLjA4LjMzLTEuMzcgMy45OS0yLjQ2IDUuMzUtNy4wNyA1LjQyLTcuMjkgMS00LjM1LjU5LTguNzYtMS4yMi0xMy4xMS0xLjAyLTIuNDYtMi41LTQuNjgtNC4zNy02LjYtLjM3LS4zOS0uMzctMSAwLTEuMzgyLS45MS0uODUtMS44OS0xLjYyLTIuOTItMi4zMS0uNDMgMS4xNi0yLjQgNS4zNC04LjY4IDYuNzEtLjA3LjAxMy0uMTQuMDItLjIxLjAyLS40NiAwLS44Ny0uMzItLjk3LS43ODYtLjEyLS41NC4yMjgtMS4wNzcuNzY4LTEuMTkgNS44OS0xLjI4IDcuMi01LjM0IDcuMjgtNS41OS44NTYtMy4yMi41Ny02LjUtLjg1NC05Ljc1NS0yLjA0LTQuNjUtNi4zOC04LjA0LTExLjY4LTkuMTctLjg2IDEuMjctMy4xNCAzLjk1LTcuNzkgNS4wMi0uMDcuMDItLjE1LjAyNS0uMjIuMDI1LS40NTcgMC0uODctLjMxOC0uOTc2LS43OC0uMTI2LS41NC4yMS0xLjA3Ljc1LTEuMiA0Ljk2LTEuMTQgNi42OTMtNC4zMzUgNi44MzItNC42MS42OC0xLjU4LjcwMi0zLjM2LjA2LTUuMjgtMS4xNTYtMy40Ny0zLjk0LTQuMTY1LTcuOC01LjEyLTQuMTUtMS4wMy05LjI3LTIuMy0xMy43LTcuNzUtMy44NiAyLjY5NC03LjU5IDguMi03LjEzNyAxMi40OS4yNSAyLjQzIDEuODMgNC4xNTUgNC42OCA1LjEzNS41Mi4xOC44Ljc0LjYyIDEuMjctLjE4LjUyLS43NS44LTEuMjcuNjItMy42Ni0xLjI2LTUuMTc1LTMuNDUtNS43NS01LjQyLTEuMjIuMjItMi4zMy40NS0zLjMzLjY4LjEyMy41My0uMjA1IDEuMDctLjc0IDEuMiIgZmlsbD0iIzRmNTQ1YyIvPjxnIGZpbGw9IiMyMDIyMjUiPjxwYXRoIGQ9Im0xOTggOTQuMTA0aC02Yy0uNTUyIDAtMSAuNDQ3LTEgMXMuNDQ4IDEgMSAxaDZjLjU1MiAwIDEtLjQ0NyAxLTFzLS40NDgtMS0xLTEiLz48cGF0aCBkPSJtMTg1LjA5MiA3Ny4xMDJoLTI5LjM4Yy0zLjg5NCAwLTYuNzQ1LTMuNjUtNS44MTgtNy40MzMuMzk2LTEuNjIuNjA2LTMuMzEuNjA2LTUuMDQgMC01LjE0LTEuODczLTEwLjA5LTUuMjEyLTEzLjk2LS45LTEuMDQtMS4zMy0yLjM5LTEuMTg4LTMuNzUuNC0zLjg3LS4yMDItNy44My0xLjc4LTExLjYxLTEuMTI0LTIuNy0yLjczNi01LjEzLTQuNzktNy4yMy0uMzg2LS40LTEuMDItLjQxLTEuNDE0LS4wMi0uMDEuMDEtLjAxMi4wMi0uMDIuMDMtLjM3LjM4LS4zNzMuOTkuMDA0IDEuMzggMS44NzYgMS45MiAzLjM0OCA0LjE0IDQuMzc1IDYuNiAxLjgxMyA0LjM1IDIuMjI0IDguNzUgMS4yMjQgMTMuMTEtLjA3LjIxLTEuNDMgNC44My01LjQyIDcuMjktLjQ3LjI5LS42Mi45LS4zMyAxLjM3LjE5LjMxLjUxLjQ3Ljg1LjQ3LjE4IDAgLjM2LS4wNS41Mi0uMTUgMS4xMS0uNjkgMi4wNS0xLjUxIDIuODMtMi4zNyAxLjk2LTIuMTcgNS40OC0xLjY2IDYuNjcgMS4wMiAxLjA4IDIuNDMgMS42NiA1LjA4IDEuNjYgNy43OSAwIDEwLjY4LTguNjkgMTkuMzctMTkuMzcgMTkuMzctMy41NCAwLTYuODUtLjExLTkuOTItLjMzLTMuNzctLjI2LTMuNTctNS45MS4yMS01Ljg0LjQ4LjAxLjk2LjAyIDEuNDUuMDUuNTYuMDUgMS4wMi0uNCAxLjA0LS45Ni4wMi0uNTUtLjQtMS4wMi0uOTUtMS4wNS0xMi43NC0uNTgtMjEuNyAzLjIzLTIyLjQ0IDMuNTUtOS4zNCAzLjA2LTE4LjEzIDQuNi0yNi4xIDQuNi0xMi4wOCAwLTIxLjktOS41Mi0yMS45LTIxLjIzIDAtOC4yIDQuOTktMTUuNzMgMTIuNzMtMTkuMi4yNi0uMTIuNDYtLjM0LjU0LS42MnMuMDQtLjU4LS4xMS0uODJjLTEuNC0yLjI4LTIuMTMtNC44Ny0yLjEzLTcuNDggMC0uMzIuMDEtLjYzLjAzLS45My41Mi03Ljk5IDguODUtMTIuOTEgMTYuNC0xMC4yNCAxLjI3LjQ1IDIuNjEuOCAzLjkxLjloLjA4Yy41MiAwIC45NS0uNCAxLS45Mi4wNS0uNTUtLjM2LTEuMDQtLjkxLTEuMDgtNC45NS0uMzktNy43LTQuMTItNy43My00LjE2IDAtLjAxLS4wMS0uMDEtLjAxLS4wMSAwLS4wMS0uMDEtLjAyLS4wMi0uMDMtMS4zNi0xLjctMi4wOC0zLjctMi4wOC01LjggMC0zLjgyIDIuMjktNy4yMSA1LjgzLTguNjRsLjA3LS4wM2MuMzktLjE1IDIuMTMtLjc1IDQuOTYtMS40NC41NC0uMTMuODctLjY3Ljc0LTEuMnMtLjY3LS44Ni0xLjItLjczYy0zLjM2LjgxLTUuMjEgMS41MS01LjI5IDEuNTQtLjA0LjAxLS4wNy4wMy0uMTEuMDUtNC4yNCAxLjc3LTYuOTggNS44Ni02Ljk4IDEwLjQ2IDAgMi4xMS42IDQuMTQgMS43MyA1Ljk0bC0uNy4yNmMtLjA0LjAxLS4wOC4wMy0uMTIuMDUtNy4wMyAyLjY4LTExLjU3IDguOTUtMTEuNTcgMTYgMCAxLjQ4LjIxIDIuOTUuNjIgNC4zOC41NCAxLjg5LS4yMSAzLjg5LTEuODEgNS4wMy02LjA5IDQuMzItOS44NCAxMS4yNi05Ljg0IDE4LjcgMCAyLjMyLjM1IDQuNTUgMSA2LjY2IDEuMTggMy44Mi0xLjggNy42Ni01LjggNy42NmgtNDIuNzI5Yy0uNTUyIDAtMSAuNDUtMSAxIDAgLjU1Mi40NDggMSAxIDFoNTIuODY2Yy45NSAwIDEuODczLjMzIDIuNTg4Ljk2IDQuMjMzIDMuNzMxIDkuODI0IDUuOTgxIDE1Ljk0NiA1Ljk4MSA4LjA4NCAwIDE2Ljk2OC0xLjUzMiAyNi40MTMtNC41NTQgNi44MzcgMy4wNjQgMTYuNzYgNC41NTQgMzAuMzE3IDQuNTU0IDUuNjU0IDAgMTAuNzg2LTIuMjIgMTQuNjEtNS44MTguNzM3LS42OTQgMS43MS0xLjA4IDIuNzI0LTEuMDhoMzguNjI4Yy41NTIgMCAxLS40NDcgMS0xcy0uNDQ4LTEtMS0xIiBtYXNrPSJ1cmwoI2EpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDE3LjAwMikiLz48cGF0aCBkPSJtMS4xMjMgMTcuNDM0Yy41NzcgMS45NzcgMi4wOTIgNC4xNjIgNS43NDggNS40Mi41My4xNzcgMS4xLS4xIDEuMjgtLjYyLjE4LS41MjQtLjEtMS4wOTMtLjYyLTEuMjcyLTIuODUtLjk4LTQuNDMtMi43MDgtNC42OC01LjEzMi0uMy0yLjkyMyAxLjMyLTYuNDAzIDMuNjEtOS4xNzcgMS41Ny0xLjkwMyA0LjQtMi4wOSA2LjI5LS40OTggMy43MSAzLjEzMiA3LjY0IDQuMTA3IDEwLjk1IDQuOTMgMy44Ni45NTYgNi42NCAxLjY0OCA3LjggNS4xMi42NCAxLjkyNC42MiAzLjcwMi0uMDYgNS4yODQtLjE0LjI3LTEuODcgMy40Ni02LjgzIDQuNi0uNTMuMTItLjg3LjY2LS43NSAxLjIuMTEuNDYuNTIuNzcuOTguNzcuMDggMCAuMTUtLjAxLjIzLS4wMyAxLjQxLS4zMyAyLjYtLjggMy42LTEuMzQgNS43OC0zLjEgMTMuMTEtLjYzIDE1LjgxIDUuMzVsLjA2LjE0YzEuNDMgMy4yNSAxLjcxIDYuNTMuODUgOS43NS0uMDcuMjUtMS4zOSA0LjMxLTcuMjcgNS41OS0uNTQuMTItLjg4LjY1LS43NiAxLjE5LjEuNDcuNTIuNzkuOTguNzkuMDcgMCAuMTQtLjAxLjIyLS4wMiA2LjI4LTEuMzcgOC4yNS01LjU1IDguNjgtNi43Mi4wNi0uMTcuMDktLjI3LjEtLjN2LS4wMmMuOTctMy42Mi42NC03LjQ1LS45NS0xMS4wOC0yLjI0LTUuMTItNi45My04Ljg4LTEyLjY4LTEwLjI0LjQ4LTEuNzQuMzktMy42MS0uMjctNS41OS0xLjUxLTQuNTItNS4yNS01LjQ1LTkuMjItNi40My00LjIzLTEuMDUtOS4wMy0yLjI0LTEzLjE1LTcuNzUtLjMxLS40MS0uODctLjUyLTEuMzEtLjI2LTQuODAxIDIuODgxLTkuNDgxIDkuNTUxLTguOTExIDE0Ljk0MS4wNDYuNDQ2LjEzMy45MTcuMjc1IDEuNCIgbWFzaz0idXJsKCNiKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODYgLjAwMikiLz48cGF0aCBkPSJtMTMyLjE4OCA3NC45MjNjLS41NDguMDctLjkzNi41Ny0uODY3IDEuMTE3LjA3LjUwNi41Ljg3NSAxIC44NzUuMDQgMCAuMDktLjAwMy4xMy0uMDA4LjU5LS4wNzMgMS4xNy0uMTg4IDEuNzMtLjM0LjU0LS4xNDUuODUtLjY5NS43MS0xLjIyOC0uMTQtLjU0LS42OS0uODUtMS4yMi0uNzEtLjQ3LjEzLS45Ni4yMi0xLjQ2LjI4bS01NS4wNDEtMTcuNTA5Yy0yLjg4IDAtNS4yMTcgMi4zMzYtNS4yMTcgNS4yMTggMCAyLjg4IDIuMzM2IDUuMjE3IDUuMjE3IDUuMjE3IDIuODggMCA1LjIxNy0yLjMzNiA1LjIxNy01LjIxNyAwLTIuODgyLTIuMzM2LTUuMjE4LTUuMjE3LTUuMjE4bTQxLjc0MyA1LjIxOGMwIDIuODggMi4zMzYgNS4yMTcgNS4yMTggNS4yMTdzNS4yMi0yLjMzNiA1LjIyLTUuMjE3YzAtMi44ODItMi4zMy01LjIxOC01LjIxLTUuMjE4cy01LjIxIDIuMzM2LTUuMjEgNS4yMThtLTI2LjEwMSAxMi41MjJjLS40NC4zMzQtLjUyNi45NjItLjE5MyAxLjQwMi4xOTUuMjYuNDk1LjM5Ny43OTcuMzk3LjIxIDAgLjQyLS4wNy42MDMtLjIxIDMuNzEtMi44MSA4LjkxLTIuODMgMTIuNjQ1LS4wNWwuMDc3LjA1Yy40NC4zMiAxLjAzLjIgMS4zNi0uMjRzLjItMS4xLS4yNS0xLjQzYy00LjQ0LTMuMy0xMC42Mi0zLjI4LTE1LjA0LjA2bTY4LjMzLTI0Ljc2aC41MWMuNTUgMCAxIC40NCAxIDF2LjUxYzAgLjU1LjQ1IDEgMSAxczEtLjQ1IDEtMXYtLjUxYzAtLjU2LjQ1LTEgMS0xaC41MWMuNTUgMCAxLS40NSAxLTEgMC0uNTYtLjQ1LTEtMS0xaC0uNTFjLS41NSAwLTEtLjQ1LTEtMXYtLjUxYzAtLjU1LS40NS0xLTEtMXMtMSAuNDUtMSAxdi41MWMwIC41NS0uNDUgMS0xIDFoLS41MWMtLjU1IDAtMSAuNDQtMSAxIDAgLjU1LjQ1IDEgMSAxbS0xMzkuNDY5LTYuNjA5Yy44MzQgMCAxLjUxLjY3NiAxLjUxIDEuNTEgMCAuNTUzLjQ0OCAxIDEgMSAuNTUzIDAgMS0uNDQ3IDEtMSAwLS44MzQuNjc2LTEuNTEgMS41MS0xLjUxLjU1MyAwIDEtLjQ0NyAxLTFzLS40NDctMS0xLTFjLS44MzQgMC0xLjUxLS42NzYtMS41MS0xLjUxIDAtLjU1Mi0uNDQ3LTEtMS0xLS41NTIgMC0xIC40NDgtMSAxIDAgLjgzNC0uNjc2IDEuNTEtMS41MSAxLjUxLS41NTIgMC0xIC40NDctMSAxcy40NDggMSAxIDFtMTM1LjYxLTI1LjIzYy4yNTYgMCAuNTEyLS4xLjcwNy0uMjk0bDEuMTg0LTEuMTg0Yy4zOS0uMzkuMzktMS4wMjMgMC0xLjQxNC0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS4xOCAxLjE4NGMtLjM5LjM5LS4zOSAxLjAyMyAwIDEuNDE0LjIuMTk1LjQ1LjI5My43MS4yOTNtLTUuOTEgNS45MWMuMjYgMCAuNTEtLjEuNzEtLjNsMS4xOS0xLjE5Yy4zOS0uMzkuMzktMS4wMyAwLTEuNDJzLTEuMDItLjM5LTEuNDEgMGwtMS4xOCAxLjE4Yy0uMzkuMzktLjM5IDEuMDIgMCAxLjQxLjIuMTkuNDUuMjkuNzEuMjltNi4zOS0uM2MuMi4xOS40NS4yOS43MS4yOXMuNTEtLjEuNzEtLjNjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMS4xOC0xLjE5Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMHMtLjM5IDEuMDMgMCAxLjQybDEuMTkgMS4xOHptLTUuOTEtNS45MmMuMi4yLjQ1LjI5LjcxLjI5cy41MS0uMS43MS0uM2MuMzktLjM5LjM5LTEuMDIgMC0xLjQybC0xLjE4LTEuMTljLS4zOS0uMzktMS4wMi0uMzktMS40MSAwcy0uMzkgMS4wMjMgMCAxLjQxM2wxLjE5IDEuMTh6bS0xMDYuMzAxIDIuNjYxYy44MyAwIDEuNTEuNjggMS41MSAxLjUxIDAgLjgzNy0uNjggMS41MS0xLjUxIDEuNTEtLjgzMiAwLTEuNTEtLjY3My0xLjUxLTEuNTEgMC0uODMuNjc4LTEuNTEgMS41MS0xLjUxbTAgNS4wMmMxLjkzNyAwIDMuNTEtMS41NyAzLjUxLTMuNTEgMC0xLjkzMi0xLjU3My0zLjUxLTMuNTEtMy41MS0xLjkzNCAwLTMuNTEgMS41NzgtMy41MSAzLjUxIDAgMS45NCAxLjU3NiAzLjUxIDMuNTEgMy41MSIvPjwvZz48cGF0aCBkPSJtMCAwaDIwMHYxMDRoLTIwMHoiLz48L2c+PC9zdmc+'
            event.target.classList.add("img-error")
            parent.removeAttribute('href');
            event.target.outerHTML = `<div class="img-error-outer">${event.target.outerHTML}</div>`
        } else {
            if (["embedImage", "lazyContainer"].includes(parent.className)) {
                const gifTag = parent.querySelector(".gifTag");
                if (gifTag) gifTag.remove();

                const src = event.target.src;
                const url = new URL(src);

                const width = url.searchParams.get("width");
                const height = url.searchParams.get("height");

                if (width && height) {
                    event.target.style.width = `${width}px`;
                    event.target.style.height = `${height}px`;
                }
            }

            imgFailed();
        }
    } else if (event.target.tagName.toLowerCase() == "video") {
        if (["lazyVid"].includes(event.target.className)) {
            const playButton = parent.querySelector(".playButton");
            const control = parent.querySelector(".videoControls");
            if (playButton) playButton.style.display = "none";
            if (control) control.style.display = "none";

            imgFailed();
        }
    }

    if (imageObscured) {
        imageObscured.outerHTML = imageObscured.lastElementChild.innerHTML;
        handleIntersecting();
    }
}

/**
 * @param {MouseEvent} event
*/
function onLoad(event) {
    const target = event.target;
    const parent = target.parentElement;

    if (target.tagName.toLowerCase() === 'img') {
        target.classList.remove("img-failed");

        if (["embedImage", "lazyContainer"].includes(parent.className)) {
            const gifTag = parent.querySelector(".gifTag");
            if (!gifTag) {
                if (document.hasFocus() && intersecting.includes(target)) {
                    getContentType(target).then(type => {
                        target.contentType = type;
                        if (type == "image/gif") {
                            const gifTag = document.createElement("div");
                            gifTag.className = "gifTag";
                            gifTag.style.opacity = 0;
    
                            parent.appendChild(gifTag);
                        }
                    })
                }
            }
        }
    } else if (target.tagName.toLowerCase() == "video") {
        if (["lazyVid"].includes(target.className)) {
            const playButton = parent.querySelector(".playButton");
            const control = parent.querySelector(".videoControls");
            if (playButton) playButton.style.display = "";
            if (control) control.style.display = "";
            target.classList.remove("img-failed");
        }
    }
}

async function getContentType(element) {
    if (element.contentType) return element.contentType;

    return fetch(element.src, { method: 'HEAD' })
      .then(response => response.headers.get('Content-type'))
}
  

/**
 * @param {String} color
 * @param {number} alpha
 */
function ChangeRGBAlpha(color, alpha=1) {
    let rgba = color.match(/(\d+(\.\d+)?)/g);
    return rgba && rgba.length === 4 ? `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${alpha})` : null;
}

/**
 * @param {MouseEvent} event
 * @param {boolean} isOver
 */
function mouseEvents(event, isOver) {
    /** @type {HTMLElement} */
    const roleMention = event.target.closest(".roleMention");
    const message = event.target.closest(".message");

    if (roleMention) {
        roleMention.style.backgroundColor = ChangeRGBAlpha(roleMention.style.backgroundColor, isOver ? 0.3 : 0.1)
    }

    if (!message) {
        if (activeFancy) {
            processMessage(activeFancy, false);
            activeFancy = null;
        }
    }
}

function scrollEvents() {
    for (const tooltip of document.querySelectorAll(".tooltip")) {
        removeToolTip(tooltip);
    }
}

/**
 * @param {MouseEvent} event
*/
function clickEvents(event) {
    /** @type {HTMLElement} */
    const obscured = event.target.closest('.spoiler.hidden');
    const imageObscured = event.target.closest('.lazySpoiler');
    const video = event.target.closest('.playButton');
    const embedImage = !event.target.closest("a") ? event.target.closest(".embedImage") : undefined;
    const actionButton = embedImage ? embedImage.querySelector('.actionButton') : embedImage;
    const videoElem = video ? video.parentElement.querySelector("video") : undefined;
    const embedActions = actionButton ? actionButton.parentElement.parentElement : undefined;
    const blockedMessage = event.target.closest(".blockedMessage");
    const replyFooter = event.target.closest(".footer");
    const inlineJump = event.target.nodeName == "SPAN" && event.target.hasAttribute("ref");
    const replyRef = replyFooter ? replyFooter.parentElement.querySelector("[ref]") : inlineJump ? event.target : null;
    const headerSearch = document.querySelector(".header-search");
    const context = document.querySelector(".context");
    const isAttachment = event.target.nodeName == "IMG";

    if (context && event.target == context) {
        context.remove()
    }

    if (headerSearch && headerSearch.style.width && !headerSearch.contains(event.target)) {
        headerSearch.removeAttribute("style");
    }

    const repliedMessage = event.target.closest(".repliedMessage") || replyRef;
    const preview = repliedMessage ? event.target.closest(".preview") : null;

    if (repliedMessage && (event.target == repliedMessage.firstElementChild || preview || replyFooter || inlineJump)) {
        const messageID = repliedMessage.getAttribute("ref");
        const reference = document.body.querySelector(`[id^='${messageID}']`);
        if (reference) flashTo(reference);
    }

    if (blockedMessage && event.target instanceof HTMLSpanElement) {
        const blockedMessageParent = blockedMessage.parentElement;
        const messages = blockedMessageParent.querySelectorAll(".message");
        if (blockedMessageParent.classList.contains("expanded")) {
            blockedMessageParent.classList.remove("expanded")
            event.target.textContent = "Show"
            for (const message of messages) {
                message.classList.remove("force-show")
            }
        } else {
            blockedMessageParent.classList.add("expanded")
            event.target.textContent = "Hide"
            for (const message of messages) {
                message.classList.add("force-show")
            }
        }
    }

    if (obscured) {
        obscured.classList.remove("hidden");
    }
    if (imageObscured) {
        imageObscured.outerHTML = imageObscured.lastElementChild.innerHTML;
        handleIntersecting();
    }

    const doPreview = (video ? !video.closest(".oneByOneGrid") : isAttachment ? !!event.target.closest(".visualMedia") : false);

    if (video && videoElem && !doPreview) {
        NewVideoControls(videoElem)
    } else if (actionButton && embedActions) {
        const embedActionsParent = embedActions.parentElement;
        const source = actionButton.getAttribute("source");
        traverseRemoveArr(embedActionsParent, intersecting);

        if (embedActionsParent) {
            embedActionsParent.innerHTML = `<iframe class="embedIframe" allow="autoplay" frameborder="0" scrolling="no" sandbox="allow-forms allow-presentation allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" src="${source}${extraArgs(source)}" allowfullscreen=""></iframe>`;
        }
    }

    if (doPreview) {}
}

function flashTo(reference) {
    var inner = reference.closest("[data-flash]");

    if (!inner) {
        inner = document.createElement("div")
        inner.setAttribute("data-flash", "false");
        const referenceClone = reference.cloneNode(true);
        inner.appendChild(referenceClone);
        reference.replaceWith(inner);
    }

    inner.scrollIntoView({ behavior: "smooth", block: "center" });

    if (!inner.flash) {
        inner.setAttribute("data-flash", "false");
        inner.setAttribute("data-flash", "true");
    } else {
        clearTimeout(inner.flash)
    }

    inner.flash = setTimeout(() => {
        inner.setAttribute("data-flash", "false");
        delete inner.flash;
    }, 2e3)
}

function extraArgs(rawURL) {
    const url = new URL(rawURL);
    
    if (["www.youtube.com"].includes(url.host)) {
        return "?autoplay=1&amp;auto_play=1";
    } else if (["www.tiktok.com"].includes(url.host)) {
        return "?utm_source=discord.gg";
    }

    return "";
}

function traverseRemoveArr(element, intersecting) {
    removeArr(element, intersecting)
    for (const child of element.children) {
        traverseRemoveArr(child, intersecting);
    }
}

function NewVideoControls(videoElem, withFullscreen=true) {
    const parent = videoElem.parentElement;
    const playButton = parent.querySelector(".playButton");
    const audio = parent.parentElement.querySelector("audio");

    if (playButton) playButton.remove();

    parent.innerHTML = `
${videoElem.outerHTML}
<div class="videoControls" style="transform: translateY(0%);">
    <div class="videoButton">
        <svg class="controlIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z" class=""></path>
        </svg>
    </div>
    <div class="durationTimeWrapper">
        <span class="durationTimeDisplay">${audio ? "-:--" : "0:00"}</span>
        <span class="durationTimeSeparator">/</span>
        <span class="durationTimeDisplay">${audio ? "-:--" : "0:00"}</span>
    </div>
    <div class="horizontal">
        <div class="mediaBarInteraction">
            <div class="mediaBarWrapper fakeEdges">
                <div class="buffer fakeEdges" style="width: 0%; left: 0%;"></div>
                <div class="mediaBarPreview fakeEdges" style="width: 0%;"></div>
                <div class="mediaBarProgress fakeEdges" style="width: 0%;"><span class="mediaBarGrabber"></span></div>
                <div class="bubble" style="left: 0%;"></div>
            </div>
        </div>
    </div>
    <div class="flex">
        <div class="container">
            <div class="volumeButtonSlider volumeSliderWrapper">
                <div class="vertical">
                    <div class="mediaBarInteraction mediaBarInteractionVolume">
                        <div class="mediaBarWrapper fakeEdges mediaBarWrapperVolume">
                            <div class="mediaBarProgress fakeEdges" style="width: 100%;">
                                <span class="mediaBarGrabber"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="volumeButton button lookBlank colorBrand grow">
                <div class="contents">
                    <svg class="controlIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z" class=""></path>
                        <path fill="currentColor" d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z" class=""></path>
                    </svg>
                </div>
            </button>
        </div>
    </div>
    ${withFullscreen ? `<div>
        <button class="videoButton button lookBlank colorBrand grow">
            <div class="contents lineHeightReset">
                <svg class="controlIcon controlIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4 6c0-1.1.9-2 2-2h3a1 1 0 0 0 0-2H6a4 4 0 0 0-4 4v3a1 1 0 0 0 2 0V6ZM4 18c0 1.1.9 2 2 2h3a1 1 0 1 1 0 2H6a4 4 0 0 1-4-4v-3a1 1 0 1 1 2 0v3ZM18 4a2 2 0 0 1 2 2v3a1 1 0 1 0 2 0V6a4 4 0 0 0-4-4h-3a1 1 0 1 0 0 2h3ZM20 18a2 2 0 0 1-2 2h-3a1 1 0 1 0 0 2h3a4 4 0 0 0 4-4v-3a1 1 0 1 0-2 0v3Z" class=""></path>
                </svg>
            </div>
        </button>
    </div>` : ''}
</div>

<div class="playPausePop" style="opacity: 0; transform: scale(2.5) translateZ(0px);">
    <svg class="playPausePopIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="var(--interactive-normal)" d="M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6ZM15 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z" class=""></path></svg>
</div>

${withFullscreen ? `
<div class="downloadHoverButton">
    <a class="hoverButton" href="${videoElem.src}" rel="noreferrer noopener" target="_blank">
        <svg class="hoverButtonIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a1 1 0 0 1 1 1v10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42l3.3 3.3V3a1 1 0 0 1 1-1ZM3 20a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z" class=""></path></svg>
    </a>
</div>` : ''}
`

    const video = parent.querySelector("video") || audio;
    const control = parent.querySelector(".videoControls");
    const horizontal = control.querySelector(".horizontal");
    const fullscreen = control.querySelector(".lineHeightReset");
    const state = control.querySelector(".videoButton");
    const timeWrapper = control.querySelector(".durationTimeWrapper");
    const controlIcon = control.querySelector(".videoButton");
    const progress = control.querySelector(".mediaBarProgress");
    const preview = control.querySelector(".mediaBarPreview");
    const buffer = control.querySelector(".buffer");
    const bubble = control.querySelector(".bubble");
    const volumeSlider = control.querySelector(".volumeButtonSlider");
    const volumeVert = volumeSlider.querySelector(".vertical");
    const volumeProgress = volumeSlider.querySelector(".mediaBarProgress");
    const volumeInteract = volumeSlider.querySelector(".mediaBarInteraction");
    const volumeButton = control.querySelector(".volumeButton");
    const volumeIcon = volumeButton.querySelector(".contents");
    const playPop = parent.querySelector(".playPausePop");
    const downloadHover = parent.querySelector(".downloadHoverButton");

    const progressBar = horizontal.firstElementChild;
    const seeking = timeWrapper.firstElementChild;
    const total = timeWrapper.lastElementChild;

    let currentWidth = parseFloat(volumeProgress.style.width) || 0;
    let targetWidth = currentWidth;
    let animationFrame = null;
    let hideTimeout;
    let hideParent;

    function hideControls() {
        clearTimeout(hideParent);
        showControl();
        hideParent = setTimeout(() => {
            hideControl();
        }, 2900)
    }

    function setVolumeIconn() {
        if (targetWidth >= 50) {
            volumeIcon.innerHTML = `<svg class="controlIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z" class=""></path><path fill="currentColor" d="M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z" class=""></path></svg>`
        } else if (targetWidth > 0.2) {
            volumeIcon.innerHTML = `<svg class="controlIcon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.18 15.36c-.55.35-1.18-.12-1.18-.78v-.27c0-.36.2-.67.45-.93a2 2 0 0 0 0-2.76c-.24-.26-.45-.57-.45-.93v-.27c0-.66.63-1.13 1.18-.78a4 4 0 0 1 0 6.72Z" class=""></path></svg>`
        } else {
            volumeIcon.innerHTML = `<svg class="controlIcon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM22.7 8.3a1 1 0 0 0-1.4 0L19 10.58l-2.3-2.3a1 1 0 1 0-1.4 1.42L17.58 12l-2.3 2.3a1 1 0 0 0 1.42 1.4L19 13.42l2.3 2.3a1 1 0 0 0 1.4-1.42L20.42 12l2.3-2.3a1 1 0 0 0 0-1.4Z" class=""></path></svg>`
        }

        video.volume = targetWidth / 100;
    }
    
    function volumeDrag(event) {
        const rect = volumeInteract.firstElementChild.getBoundingClientRect();
        const offsetY = event.clientY - rect.top;
        
        targetWidth = Math.min(Math.max((1 - (offsetY / rect.height)) * 100, 0), 100);

        volumeButton.prevVolume = targetWidth;
        
        if (!animationFrame) smoothVolumeUpdate();
    }
    
    function smoothVolumeUpdate() {
        currentWidth += (targetWidth - currentWidth) * 0.1;
        currentWidth = Math.min(Math.max(0, currentWidth), 100);
        volumeProgress.style.width = `${currentWidth}%`;
        setVolumeIconn();
    
        if (Math.abs(targetWidth - currentWidth) > 0.1) {
            animationFrame = requestAnimationFrame(smoothVolumeUpdate);
        } else {
            animationFrame = null;
        }
    }

    volumeInteract.addEventListener("mousedown", (event) => {
        volumeDrag(event);

        function mousemoveWrapper(event) {
            volumeProgress.isDragging = true;
            volumeDrag(event);
        }

        document.addEventListener("mousemove", mousemoveWrapper);
        document.addEventListener("mouseup", () => {
            delete volumeProgress.isDragging;
            document.removeEventListener("mousemove", mousemoveWrapper);
            if (hideTimeout === undefined) {
                volumeSlider.classList.remove("sliderVisible");
            }
        }, {once: true});
    });

    for (const elem of [volumeVert, volumeButton]) {
        elem.addEventListener("mouseleave", () => {
            if (!volumeSlider.clicked) {
                hideTimeout = setTimeout(() => {
                    if (!volumeProgress.isDragging) {
                        volumeSlider.classList.remove("sliderVisible");
                    }
                    hideTimeout = undefined;
                }, 165);
            }
        })

        elem.addEventListener("mouseenter", () => {
            clearTimeout(hideTimeout);
            if (hideTimeout === undefined) hideTimeout = 0;
            volumeSlider.classList.add("sliderVisible");
        })
    }

    function handleMouseDown(event) {
        if (!volumeSlider.parentElement.contains(event.target)) {
            delete volumeSlider.clicked;
            volumeSlider.classList.remove("sliderVisible");
        }
        if (!volumeSlider.clicked) {
            document.removeEventListener("mousedown", handleMouseDown)
        }
    }

    volumeButton.addEventListener("click", () => {
        volumeSlider.classList.add("sliderVisible");
        volumeSlider.clicked = true;

        document.addEventListener("mousedown", handleMouseDown)

        if (volumeButton.prevVolume === undefined)
            volumeButton.prevVolume = currentWidth;
        
        if (animationFrame)
            return;
        
        targetWidth = targetWidth > 0.0 ? 0 : volumeButton.prevVolume;

        smoothVolumeUpdate();
    })

    function switchState() {
        setIcon(video.paused || video.ended, false, true);
        video.paused || video.ended ? video.play() : video.pause();
    }

    video?.addEventListener("loadedmetadata", () => {
        total.textContent = formatTime(video.duration);
    });

    function updateProgressBar() {
        var percentage = (video.currentTime / video.duration) * 100;
        seeking.textContent = formatTime(video.currentTime);
        total.textContent = formatTime(video.duration);
        progress.style.width = `${percentage}%`;
    
        if (!video.paused && !video.ended && !isNaN(video.duration)) {
            requestAnimationFrame(updateProgressBar);
        }
    }

    video?.addEventListener("click", switchState)
    state.addEventListener("click", switchState);

    video?.addEventListener("play", () => {
        requestAnimationFrame(updateProgressBar);
    });

    function showControl() {
        control.style.transform = "translateY(0%)";
    }

    function hideControl() {
        if (!video.paused && !video.ended && !audio) {
            control.style.transform = "translateY(100%)";
        }
    }

    parent.addEventListener("mouseleave", () => {
        if (downloadHover) downloadHover.style.opacity = 0;
        hideControl();
    })
    parent.addEventListener("mouseenter", () => {
        if (downloadHover) downloadHover.style.opacity = 1;
        showControl();
    })

    downloadHover?.addEventListener("mouseenter", () => {
        const tooltip = displayToolTip(downloadHover, "Download");

        downloadHover.addEventListener("mouseleave", () => {
            removeToolTip(tooltip);
        }, {once: true})
    })

    parent.addEventListener("mousemove", hideControls)

    function animatePopEffect(element) {
        let startTime = null;
        const opacityDuration = 405;
        const scaleDuration = 900;
    
        const startOpacity = 1;
        const startScale = 1.1;
        const endScale = 2.4;
    
        function animationStep(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
    
            const opacityProgress = Math.min(elapsed / opacityDuration, 1);
            const scaleProgress = Math.min(elapsed / scaleDuration, 1);
    
            const newOpacity = startOpacity * (1 - opacityProgress);
    
            const newScale = startScale + (endScale - startScale) * (1 - Math.pow(1 - scaleProgress, 2));
    
            element.style.opacity = newOpacity;
            element.style.transform = `scale(${newScale})`;
    
            if (opacityProgress < 1 || scaleProgress < 1) {
                requestAnimationFrame(animationStep);
            }
        }
    
        requestAnimationFrame(animationStep);
    }

    function setIcon(showPlay=false, ended=false, showIcon=false) {

        if (ended) {
            controlIcon.innerHTML = `<svg class="controlIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12,5 L12,1 L7,6 L12,11 L12,7 C15.31,7 18,9.69 18,13 C18,16.31 15.31,19 12,19 C8.69,19 6,16.31 6,13 L4,13 C4,17.42 7.58,21 12,21 C16.42,21 20,17.42 20,13 C20,8.58 16.42,5 12,5 L12,5 Z"></path></svg>`
        } else if (showPlay) {
            controlIcon.innerHTML = `<svg class="controlIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6ZM15 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z" class=""></path></svg>`
        } else {
            controlIcon.innerHTML = `<svg class="controlIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z" class=""></path></svg>`
        }

        if (audio) return;

        if (ended || !showPlay) {
            showControl();
            playPop.innerHTML = `<svg class="playPausePopIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="var(--interactive-normal)" d="M6 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6ZM15 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3Z" class=""></path></svg>`
        } else {
            hideControls();
            playPop.innerHTML = `<svg class="playPausePopIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="var(--interactive-normal)" d="M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z" class=""></path></svg>`
        }

        if (showIcon && !progress.isDragging) {
            animatePopEffect(playPop);
        }
    }
    
    video?.addEventListener("ended", () => {
        setIcon(null, true, true);
    });

    video?.addEventListener("progress", (e) => {
        var buffered = (e.target.buffered.end(0) / e.target.duration) * 100;
        if (buffer) buffer.style.width = `${buffered}%`;
    });

    function mousemove(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const widthPercent = Math.min(Math.max((offsetX / rect.width) * 100, 0), 100);
        const newTime = (widthPercent / 100) * video.duration;

        preview.style.width = `${widthPercent}%`;

        bubble.textContent = formatTime(isNaN(newTime) ? 0 : newTime);
        bubble.style.left = `${widthPercent}%`;
    }

    function onDrag(event) {
        const rect = progressBar.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;

        const widthPercent = Math.min(Math.max((offsetX / rect.width) * 100, 0), 100)

        const dragX = offsetX;
        const containerWidth = progressBar.offsetWidth;
        const newTime = Math.max(Math.min((dragX / containerWidth) * video.duration, video.duration), 0);

        if (Math.trunc(newTime) >= Math.trunc(video.duration)) {
            setIcon(null, true)
        } else if (progress.isDragging && video.paused && progress.wasPaused || progress.wasPaused === undefined) {
            setIcon(false)
        }

        if (isNaN(newTime)) return;
    
        video.currentTime = newTime;
        seeking.textContent = formatTime(video.currentTime);

        progress.style.width = `${widthPercent}%`;

        bubble.textContent = formatTime(newTime);
        bubble.style.left = `${widthPercent}%`;
    }

    progressBar.addEventListener("mousemove", mousemove);

    progressBar.addEventListener("mousedown", (event) => {
        progress.isDragging = true;
        progress.wasPaused = video.paused;
        video.pause();
        onDrag(event);
        mousemove(event);

        document.addEventListener("mousemove", onDrag);
        document.addEventListener("mouseup", () => {
            delete progress.isDragging;
            if (progress.wasPaused === false && !video.ended) video.play();
            delete progress.wasPaused;
            document.removeEventListener("mousemove", onDrag);
        }, {once: true});
    });


    fullscreen?.addEventListener("click", () => {
        if (isFullScreen()) unsetFullscreen();
        else setFullscreen(parent);
    });

    fullscreen?.addEventListener("mouseenter", () => {
        const tooltip = displayToolTip(fullscreen, "Full Screen");

        fullscreen.addEventListener("mouseleave", () => {
            removeToolTip(tooltip);
        }, {once: true})
    })


    !audio ? video?.play() : null;
    setIcon(!audio);
}

const makeStickerURL = (id, ext) => `https://cdn.jsdelivr.net/gh/Azizi-X/exporter/stickers/${id}.${ext}`

function GetStickerURL(id, type) {
    if (type == "3") {
        return makeStickerURL(id, "json")
    }
}

const intersecting = [];

const gifObserver = new IntersectionObserver(async (entries) => {
    for (const entry of entries) {

        if (!entry.target.parentElement) continue;
        const isEmoji = entry.target.classList.contains("emoji");
        if (isEmoji && !entry.target.hasAttribute("animated")) continue;

        const type = entry.target.getAttribute("type");
        const isVideo = entry.target instanceof HTMLVideoElement;
        const isLottie = type == "3";
        const isSticker = entry.target.classList.contains("lazySticker");
        const isReaction = entry.target.classList.contains("lazyReact") || isEmoji;
        const isPNG = !isVideo && !isLottie && isSticker;
        const isGIF = !isReaction && !isVideo && !isLottie && entry.target.src.includes(".webp?size=");
        const sticker = isLottie ? entry.target.firstElementChild : undefined;
        const gifTag = !isSticker ? entry.target.parentElement.querySelector(".gifTag") : undefined;
        const focused = document.hasFocus();
        const isFailed = entry.target.classList.contains("img-failed") || (entry.target.parentElement.classList.contains("img-failed") && entry.target.parentElement.classList.contains("lazyContainer"));
        const imageObscured = entry.target.closest('.lazySpoiler');

        if (isVideo) {
            entry.target.muted = true;
        }

        if (entry.isIntersecting && !imageObscured) {
            if (isLottie && !sticker && !isFailed) {
                const stickerURL = GetStickerURL(entry.target.id, entry.target.getAttribute("type"));
                if (stickerURL) {
                    if (isLottie) {
                        const obj = window.lottie.loadAnimation({
                            container: entry.target,
                            renderer: 'canvas',
                            loop: true,
                            autoplay: false,
                            path: stickerURL,
                        })

                        if (obj) {
                            entry.target.play = async () => await obj.play();
                            entry.target.pause = () => obj.pause();
                        }
                    }
                }
            }
        }

        if (focused && entry.isIntersecting && !isFailed && !imageObscured) {
            entry.target.processed = true;
            if (gifTag) gifTag.style.opacity = 0;
            if (isVideo || isLottie) {
                try{await entry.target.play();} catch(e){}
            } else if (isGIF) {
                entry.target.src = entry.target.src.replace(/.webp/g, ".gif")
            } else if (isPNG) {
                entry.target.src = deleteParams(entry.target.src, ["passthrough"])
            } else if (isReaction) {
                entry.target.src = setParams(entry.target.src, {"animated": "true"})
            } else {
                entry.target.src = deleteParams(entry.target.src, ["format", "quality"])
            }
        }

        removeArr(entry.target, intersecting)
        
        if (entry.isIntersecting) {
            intersecting.push(entry.target)
        } else if (!isFailed && entry.target.processed) {
            if (gifTag) gifTag.removeAttribute('style');
            if (isVideo || isLottie) {
                try{entry.target.pause();} catch(e){}
                entry.target.removeAttribute('muted');
            } else if (isGIF) {
                entry.target.src = entry.target.src.replace(/.gif/g, ".webp")
            } else if (isPNG) {
                entry.target.src = setParams(entry.target.src, {"passthrough": "false"})
            } else if (isReaction) {
                entry.target.src = setParams(entry.target.src, {"animated": "false"})
            } else {
                entry.target.src = setParams(entry.target.src, {"format": "webp", "quality": "lossless"})
            }
        }
    }
}, {threshold: 0.67});

function deleteParams(u, p) {
    const url = new URL(u);

    for (const param of p) { 
        url.searchParams.delete(param);
    }

    return url.toString();
}

function setParams(u, p) {
    const url = new URL(u);

    for (const [k, v] of Object.entries(p)) {
        url.searchParams.set(k, v);
    }

    return url.toString();
}

window.addEventListener('focus', handleIntersecting);

async function handleIntersecting() {

    if (activeFancy) processMessage(activeFancy, true);

    for (const intersect of intersecting) {
        if (!intersect.parentElement) continue;
        intersect.processed = true;
        const isEmoji = intersect.classList.contains("emoji");
        const isSticker = intersect.classList.contains("lazySticker");
        const gifTag = !isSticker ? intersect.parentElement.querySelector(".gifTag") : undefined;

        const isVideo = intersect instanceof HTMLVideoElement;
        const type = intersect.getAttribute("type");
        const isLottie = type == "3";
        const isReaction = intersect.classList.contains("lazyReact") || isEmoji;
        const isPNG = !isVideo && !isLottie && intersect.classList.contains("lazySticker");
        const isGIF = !isReaction && !isVideo && !isLottie && intersect.src.includes(".webp?size=");
        const isFailed = intersect.classList.contains("img-failed") || (intersect.parentElement.classList.contains("img-failed") && intersect.parentElement.classList.contains("lazyContainer"));
        const imageObscured = intersect.closest('.lazySpoiler');

        if (isFailed || imageObscured) return;

        if (gifTag) gifTag.style.opacity = 0;
        if (isVideo || isLottie) {
            intersect.muted = true;
            try{await intersect.play();} catch(e){}
        } else if (isGIF) {
            intersect.src = intersect.src.replace(/.webp/g, ".gif")
        } else if (isPNG) {
            intersect.src = deleteParams(intersect.src, ["passthrough"])
        } else if (isReaction) {
            intersect.src = setParams(intersect.src, {"animated": "true"})
        } else {
            intersect.src = deleteParams(intersect.src, ["format", "quality"])
        }
    }
}

window.addEventListener('blur', async () => {

    if (activeFancy) {
        processMessage(activeFancy, false);
        activeFancy = null;
    }

    for (const intersect of intersecting) {
        if (!intersect.parentElement || !intersect.processed) continue;
        const isEmoji = intersect.classList.contains("emoji");
        const isSticker = intersect.classList.contains("lazySticker");
        const gifTag = !isSticker ? intersect.parentElement.querySelector(".gifTag") : undefined;

        const isVideo = intersect instanceof HTMLVideoElement;
        const type = intersect.getAttribute("type");
        const isLottie = type == "3";
        const isReaction = intersect.classList.contains("lazyReact") || isEmoji;
        const isPNG = !isVideo && !isLottie && intersect.classList.contains("lazySticker");
        const isGIF = !isReaction && !isVideo && !isLottie && intersect.src.includes(".gif?size=");
        const isFailed = intersect.classList.contains("img-failed") || (intersect.parentElement.classList.contains("img-failed") && intersect.parentElement.classList.contains("lazyContainer"));
        const imageObscured = intersect.closest('.lazySpoiler');

        if (isFailed || imageObscured) return;

        if (gifTag) gifTag.removeAttribute('style');
        if (isVideo || isLottie) {
            try{intersect.pause();} catch(e){}
            intersect.removeAttribute('muted');
        } else if (isGIF) {
            intersect.src = intersect.src.replace(/.gif/g, ".webp")
        } else if (isPNG) {
            intersect.src = setParams(intersect.src, {"passthrough": "false"})
        } else if (isReaction) {
            intersect.src = setParams(intersect.src, {"animated": "false"})
        } else {
            intersect.src = setParams(intersect.src, {"format": "webp", "quality": "lossless"})
        }
    }
});

function preparePre(child) {
    return `<code class="inline">${child.textContent}</code>`
}

function prepareBlockquote(child) {
    const textContent = prepareReply(child, null, false);
    const split = textContent.split("\n");
    return split.map(word => `> ${word}`).join('\n');
}

function prepareReply(reference, iconContainer, removeLines=true) {
    var nodes = "";

    const ignoreNodes = ["timestamp_msg", "edited"];
    const allowedNames = ["STRONG", "H1", "H2", "H3", "SMALL", "A", "EM", "U", "S", "CODE", "OL", "UL"];
    const inlineNodes = [
        "timestamp_md",
        "edited",
        "spoiler", "spoiler hidden",
        "channelMention", "channelMention",
        "mention", "mention interactive",
        "emojiContainer", "emojiContainer emojiJumbo",
        "attachmentLink", "attachmentLink interactive"
    ];
    const nodePrepare = {"PRE": preparePre, "blockquote": prepareBlockquote}
    const modifyNodes = {"spoiler": "hidden"}
    const removeAttr = {"roleMention": "style"}

    const messageContent = reference.querySelector(".messageContent");
    const blockQuote = reference.querySelector("blockquote");

    /** @type {HTMLElement} */
    const parent = iconContainer?.nextElementSibling || messageContent || blockQuote;

    if (parent) {
        for (const child of parent.childNodes) {
            if (!ignoreNodes.includes(child.className)) {
                var extraClasses = modifyNodes[child.className];
                var noAttr = removeAttr[child.className];
                var toPrepare = nodePrepare[child.nodeName] || nodePrepare[child.className];

                if (toPrepare) {
                    nodes += toPrepare(child)
                } else if (noAttr) {
                    const cloned = child.cloneNode(true);
                    cloned.removeAttribute(noAttr);
                    nodes += cloned.outerHTML;
                } else if (extraClasses) {
                    const cloned = child.cloneNode(true);
                    cloned.classList.add(extraClasses)
                    nodes += cloned.outerHTML;
                } else if (allowedNames.includes(child.nodeName) || inlineNodes.includes(child.className)) {
                    nodes += child.outerHTML;
                } else {
                    nodes += child.textContent;
                }
            }
        }
    }

    if (removeLines) {
        nodes = nodes.replaceAll("\n", " ")
    }

    return nodes
}

const loadObserver = new IntersectionObserver(async (entries) => {
    for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const audioControls = entry.target.querySelector(".audioControls");
        const threadMessage = entry.target.classList.contains("threadInner") ? entry.target : null
        const repliedMessage = entry.target.classList.contains("repliedMessage") ? entry.target : null;

        if (audioControls && entry.isIntersecting) {
            NewVideoControls(audioControls.firstElementChild, false);
            audioControls.firstElementChild.remove();
        }

        if (threadMessage) {

            const messageID = threadMessage.getAttribute("ref");
            const reference = document.body.querySelector(`[id^='${messageID}']`);

            if (reference) {
                const firstElem = threadMessage.firstElementChild;

                firstElem.className = 'threadMessageAccessory';
                firstElem.innerHTML = '';
                
                const iconContainer = reference.querySelector(".iconContainer");
                const forwarded = reference.querySelector(".forwarded");
                const botTag = reference.querySelector(".botTag");
    
                const referenceFancy = getFancyFromMessage(reference);
                if (referenceFancy) {
                    const avatarIcon = referenceFancy.querySelector(".avatarIcon");
                    const usernameMsg = referenceFancy.querySelector(".username_msg")?.cloneNode(true);
                    if (usernameMsg) {
                        usernameMsg.removeAttribute("class")
    
                        var trailingIcon = "";
    
                        if (forwarded) {
                            trailingIcon += `<svg class="repliedTextContentLeadingIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="var(--interactive-normal)" d="M21.7 7.3a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L18.58 9H13a7 7 0 0 0-7 7v4a1 1 0 1 1-2 0v-4a9 9 0 0 1 9-9h5.59l-3.3-3.3a1 1 0 0 1 1.42-1.4l5 5Z" class=""></path></svg>`
                        }
    
                        firstElem.innerHTML += `<img src="${avatarIcon.src}" alt=" ">${botTag ? botTag.outerHTML : ''}${usernameMsg.outerHTML}${trailingIcon}`;
                    }
                }
    
    
                const hasAttachments = reference.querySelector(".visualMedia") || reference.querySelector(".nonVisualMedia") || reference.querySelector(".embed") || reference.querySelector(".inlineEmbed") || forwarded;
                const hasSticker = reference.querySelector(".lazySticker");
                const hasCommand = reference.querySelector(".commandName");
                const edited = reference.querySelector(".edited");
    
                const content = prepareReply(reference, iconContainer);
                if (content != "" || hasSticker || hasAttachments) {
                    var toAdd = "";
    
                    toAdd += `<div class="preview"><div class="previewInner">${content}${edited ? edited.outerHTML : ''}</div></div>`;
    
                    if (hasCommand) {
                        if (content == "") toAdd = `<span class="accessoryPlaceholder">Click to see command</span>`
                        toAdd += `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z" clip-rule="evenodd"></path></svg>`
                    } else if (hasAttachments) {
                        if (content == "" || forwarded) toAdd = `<span class="accessoryPlaceholder">Click to see attachment</span>`
                        toAdd += `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.35 8.13 3.5 4.67c.37.5.02 1.2-.6 1.2H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0ZM10.2 5.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z" clip-rule="evenodd"></path></svg>`
                    } else if (hasSticker) {
                        if (content == "") toAdd = `<span class="accessoryPlaceholder">Click to see sticker</span>`
                        toAdd += `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7 3h10a4 4 0 0 1 4 4v6.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v1.5a.5.5 0 0 1-.5.5H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm-.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z" clip-rule="evenodd"></path><path fill="currentColor" d="M19 16h1.73a3 3 0 0 1-.6.88l-3.25 3.24a3 3 0 0 1-.88.61V19a3 3 0 0 1 3-3Z"></path></svg>`
                    }
    
                    if (toAdd) {
                        firstElem.innerHTML += `<div class="threadMessageAccessoryPreview">${toAdd}</div>`
                    }
                }
            }
        } else if (repliedMessage) {

            const messageID = repliedMessage.getAttribute("ref");
            const mentioned = repliedMessage.hasAttribute("m");
            const reference = document.body.querySelector(`[id^='${messageID}']`);

            if (reference) {
                const preview = repliedMessage.querySelector(".preview");
                if (preview.textContent != "Message could not be loaded.") return;

                const isIgnored = preview.hasAttribute("ignored");
                const isBlocked = preview.hasAttribute("blocked");

                const iconContainer = reference.querySelector(".iconContainer");
                const icon = iconContainer?.firstElementChild.className;
                const replyIcon = repliedMessage.querySelector(".replyIcon");
                const forwarded = reference.querySelector(".forwarded");
                const botTag = reference.querySelector(".botTag");

                if (!icon) {
                    const referenceFancy = getFancyFromMessage(reference);
                    if (referenceFancy) {
                        const avatarIcon = referenceFancy.querySelector(".avatarIcon");
                        const usernameMsg = referenceFancy.querySelector(".username_msg")?.cloneNode(true);
                        const clanBadge = referenceFancy.querySelector(".clanTag")?.cloneNode(true);
                        if (usernameMsg) {
                            usernameMsg.removeAttribute("class")

                            if (mentioned) usernameMsg.textContent = "@" + usernameMsg.textContent

                            var trailingIcon = "";

                            if (forwarded) {
                                trailingIcon += `<svg class="repliedTextContentLeadingIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="var(--interactive-normal)" d="M21.7 7.3a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4-1.4L18.58 9H13a7 7 0 0 0-7 7v4a1 1 0 1 1-2 0v-4a9 9 0 0 1 9-9h5.59l-3.3-3.3a1 1 0 0 1 1.42-1.4l5 5Z" class=""></path></svg>`
                            }

                            replyIcon.outerHTML = `<img src="${avatarIcon.src}" alt=" ">${botTag ? botTag.outerHTML : ''}${usernameMsg.outerHTML}${clanBadge ? clanBadge.outerHTML : ''}${trailingIcon}`;
                        }
                    }
                } else if (icon != "replyIcon") {
                    replyIcon.className = icon + " iconFixed";
                }

                const hasAttachments = reference.querySelector(".visualMedia") || reference.querySelector(".nonVisualMedia") || reference.querySelector(".embed") || reference.querySelector(".inlineEmbed");
                const hasSticker = reference.querySelector(".lazySticker");
                const hasCommand = reference.querySelector(".commandName");
                const edited = reference.querySelector(".edited");

                const content = prepareReply(reference, iconContainer);

                if (content != "" || hasSticker || hasAttachments || hasCommand || isIgnored || isBlocked) {
                    preview.innerHTML = `<div class="previewInner">${!isIgnored && !isBlocked ? content : ''}</div>`;

                    if (isIgnored) {
                        repliedMessage.innerHTML += `<span class="accessoryPlaceholder">Ignored message</span>`
                    } else if (isBlocked) {
                        repliedMessage.innerHTML += `<span class="accessoryPlaceholder">Blocked message</span>`
                    } else if (hasCommand) {
                        if (content == "") repliedMessage.innerHTML += `<span class="accessoryPlaceholder">Click to see command</span>`
                        else if (edited) repliedMessage.innerHTML += edited.outerHTML
                        repliedMessage.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z" clip-rule="evenodd"></path></svg>`
                    } else if (hasAttachments) {
                        if (content == "") repliedMessage.innerHTML += `<span class="accessoryPlaceholder">Click to see attachment</span>`
                        else if (edited) repliedMessage.innerHTML += edited.outerHTML
                        repliedMessage.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm13.35 8.13 3.5 4.67c.37.5.02 1.2-.6 1.2H5.81a.75.75 0 0 1-.59-1.22l1.86-2.32a1.5 1.5 0 0 1 2.34 0l.5.64 2.23-2.97a2 2 0 0 1 3.2 0ZM10.2 5.98c.23-.91-.88-1.55-1.55-.9a.93.93 0 0 1-1.3 0c-.67-.65-1.78-.01-1.55.9a.93.93 0 0 1-.65 1.12c-.9.26-.9 1.54 0 1.8.48.14.77.63.65 1.12-.23.91.88 1.55 1.55.9a.93.93 0 0 1 1.3 0c.67.65 1.78.01 1.55-.9a.93.93 0 0 1 .65-1.12c.9-.26.9-1.54 0-1.8a.93.93 0 0 1-.65-1.12Z" clip-rule="evenodd"></path></svg>`
                    } else if (hasSticker) {
                        if (content == "") repliedMessage.innerHTML += `<span class="accessoryPlaceholder">Click to see sticker</span>`
                        else if (edited) repliedMessage.innerHTML += edited.outerHTML
                        repliedMessage.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7 3h10a4 4 0 0 1 4 4v6.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v1.5a.5.5 0 0 1-.5.5H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm-.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z" clip-rule="evenodd"></path><path fill="currentColor" d="M19 16h1.73a3 3 0 0 1-.6.88l-3.25 3.24a3 3 0 0 1-.88.61V19a3 3 0 0 1 3-3Z"></path></svg>`
                    } else if (edited) {
                        repliedMessage.innerHTML += edited.outerHTML
                    }
                } else if (edited) {
                    repliedMessage.innerHTML += edited.outerHTML
                }
            }
        }

        loadObserver.unobserve(entry.target);
    }
}, {threshold: 0.001, rootMargin: "50px 0px"});

function getFancyFromMessage(message) {
    if (isFancyMessage(message)) {
        return message;
    }
    
    return getFancyFromMessage(message.previousElementSibling);
}

function isFancyMessage(message) {
    return message.classList.contains("groupStart") || message.classList.contains("systemMessage") || !message.classList.contains("message");
}

const observer = new MutationObserver(async (mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
            for (const node of mutation.addedNodes) {
                if (node instanceof HTMLElement) {
                    if (
                        node.classList.contains("lazyGif") ||
                        node.classList.contains("emoji") ||
                        node.classList.contains("lazySticker") ||
                        node.classList.contains("lazyReact")
                    ) {
                        gifObserver.observe(node);
                    } else if (node.className == "file audio" || node.classList.contains("repliedMessage") || node.classList.contains("threadInner")) {
                        loadObserver.observe(node);
                    } else if (node.classList.contains("message")) {
                        node.addEventListener("mouseenter", messageEnter, {capture: true});
                        node.addEventListener("mouseleave", messageLeave);
                    }
                }
            }
        }
    }
});

var activeFancy = null;

function messageEnter(event) {
    const message = event.currentTarget;
    const fancy = getFancyFromMessage(message);

    if (fancy == activeFancy) {
        return
    } else if (activeFancy) {
        processMessage(activeFancy, false);
    }

    activeFancy = fancy;

    processMessage(message, true)
}

function messageLeave(event) {
    const message = event.currentTarget;

    const fancy = getFancyFromMessage(message);
    if (fancy == activeFancy) {
        return
    }

    processMessage(message, false);
}

function processMessage(messageRaw, isOver) {
    message = getFancyFromMessage(messageRaw)

    const avatarDeco = message.querySelector(".avatarDeco");
    const avatarIcon = message.querySelector(".avatarIcon");

    if (avatarDeco && avatarDeco.src.includes("s/a_")) {
        if (isOver) {
            if (document.hasFocus()) {
                avatarDeco.src = deleteParams(avatarDeco.src, ["passthrough"])
            }
        } else {
            avatarDeco.src = setParams(avatarDeco.src, {"passthrough": "false"})
        }
    }

    if (avatarIcon && avatarIcon.src.includes("/a_")) {
        if (isOver) {
            if (document.hasFocus()) {
                avatarIcon.src = avatarIcon.src.replace(/.webp/g, ".gif")
            }
        } else {
            avatarIcon.src = avatarIcon.src.replace(/.gif/g, ".webp")
        }
    }
}

observer.observe(document, {childList: true, subtree: true});

document.addEventListener('mouseover', (event) => {
    mouseEvents(event, true)
});

document.addEventListener('mouseout', (event) => {
    mouseEvents(event, false)
});

document.addEventListener("click", clickEvents, {capture: true})
document.addEventListener('error', onError, true);
document.addEventListener('load', onLoad, true);
// document.addEventListener("scroll", scrollEvents);

document.addEventListener("contextmenu", contextMenu);

function contextMenu(event) {
    event.preventDefault();

    const element = event.target;

    const currentContext = document.querySelector(".context");
    if (currentContext) {
        if (!currentContext.firstElementChild.contains(element)) {
            currentContext.remove();
        }
        return;
    }

    const message = element.closest(".message");
    if (!message) return;
    const messageContent = message.querySelector(".messageContent");

    const context = document.createElement("div");
    context.className = "context";

    const inner = document.createElement("div");
    inner.className = "context-inner";

    let extra = "";

    const channelMention = element.closest(".channelMention");
    const videoObj = (element.closest(".lazyContainer") || element.closest(".embedImage"))?.querySelector("video");

    if (channelMention) {
        extra += `</div><div class="context-item" id="message-copy-native-link"><div class="context-label">Copy Link</div></div>`
    } else if (element.nodeName == "A" || element.nodeName == "IMG" || videoObj) {
        extra += `<div class="context-separator"></div><div class="context-item" id="message-copy-native-link"><div class="context-label">Copy Link</div></div><div class="context-item" id="message-open-native-link"><div class="context-label">Open Link</div></div>`
    }

    var options = `
    <div class="context-item" id="message-copy-link"><div class="context-label">Copy Message Link</div><div class="context-iconContainer"><svg class="context-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16.32 14.72a1 1 0 0 1 0-1.41l2.51-2.51a3.98 3.98 0 0 0-5.62-5.63l-2.52 2.51a1 1 0 0 1-1.41-1.41l2.52-2.52a5.98 5.98 0 0 1 8.45 8.46l-2.52 2.51a1 1 0 0 1-1.41 0ZM7.68 9.29a1 1 0 0 1 0 1.41l-2.52 2.51a3.98 3.98 0 1 0 5.63 5.63l2.51-2.52a1 1 0 0 1 1.42 1.42l-2.52 2.51a5.98 5.98 0 0 1-8.45-8.45l2.51-2.51a1 1 0 0 1 1.42 0Z" class=""></path><path fill="currentColor" d="M14.7 10.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 1 0 1.4 1.4l4-4Z"></path></svg></div></div>
    <div class="context-separator"></div>
    <div class="context-item" id="message-copy-text"><div class="context-label">Copy Text</div><div class="context-iconContainer"><svg class="context-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M3 16a1 1 0 0 1-1-1v-5a8 8 0 0 1 8-8h5a1 1 0 0 1 1 1v.5a.5.5 0 0 1-.5.5H10a6 6 0 0 0-6 6v5.5a.5.5 0 0 1-.5.5H3Z" class=""></path><path fill="currentColor" d="M6 18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4h-3a5 5 0 0 1-5-5V6h-4a4 4 0 0 0-4 4v8Z" class=""></path><path fill="currentColor" d="M21.73 12a3 3 0 0 0-.6-.88l-4.25-4.24a3 3 0 0 0-.88-.61V9a3 3 0 0 0 3 3h2.73Z"></path></svg></div></div>
    ${extra}
    <div class="context-separator"></div>
    <div class="context-item" id="message-devmode-copy-id"><div class="context-label">Copy Message ID</div><div class="context-iconContainer"><svg class="context-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z" class=""></path><path fill="currentColor" fill-rule="evenodd" d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z" clip-rule="evenodd"></path></svg></div></div>
    `

    if (channelMention) {
        extra += `<div class="context-separator"></div>`
        extra += `<div class="context-item" id="message-devmode-copy-id"><div class="context-label">Copy Channel ID</div><div class="context-iconContainer"><svg class="context-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z" class=""></path><path fill="currentColor" fill-rule="evenodd" d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z" clip-rule="evenodd"></path></svg></div></div>`
        options = extra
    }

    inner.innerHTML = options

    inner.querySelector("#message-copy-link")?.addEventListener("click", () => {
        context.remove();
        const channelId = document.body.getAttribute("channel_id");
        const guildId = document.body.getAttribute("guild_id") || "@me";
        const text = `https://discord.com/channels/${guildId}/${channelId}/${message.id.split("|")[0]}`
        if (text) navigator.clipboard.writeText(text)
    })

    const prepareText = (node, state={}) => {
        if (!node) return "";
        let text = ""

        for (const child of node.childNodes) {
            var htmlElement = child instanceof HTMLElement;

            if (htmlElement && child.className == "edited") {
                continue
            }

            if (htmlElement) {

                if (child.classList.contains("blockquote")) {
                    text += prepareText(child, state)
                    .split("\n")
                    .map(line => `> ${line}`)
                    .join("\n");
                    continue
                } else if (child.classList.contains("channelMention")) {
                    text += `<#${child.getAttribute("c")}>`
                } else if (child.nodeName == "A") {
                    const link = child.getAttribute("href");
                    const aText = child.textContent;
                    text += link == aText ? link : `[${aText}](${link})`;
                } else if (child.classList.contains("emojiContainer")) {
                    text += child.getAttribute("str") || ""
                } else if (child.classList.contains("inline") && child.nodeName == "CODE") {
                    text += "`" + child.textContent + "`";
                    continue
                } else if (child.classList.contains("hljs")) {
                    text += "```" + (child.className.split(" ")[1] || "") + "\n" + child.textContent + "\n```"
                    continue;
                } else if (child.nodeName == "OL") {
                    var start = parseInt(child.getAttribute("start") || "1");
                    for (const li of child.children) {
                        text += `${start}. ${prepareText(li, state)}\n`
                        start++;
                    }

                    continue
                } else if (child.nodeName == "UL") {
                    const indent = state["indent"] || 0;
                    state["indent"] = indent + 1;
                    var parent = !state["parent"];
                    state["parent"] = true;

                    for (const li of child.children) {
                        text += `${indent > 0 ? "\n" : ''}${"   ".repeat(indent)}- ${prepareText(li, state)}`;
                    }

                    if (child.children.length > 0) {
                        text = text.trimStart() + "\n";
                    }

                    if (parent) {
                        delete state["parent"];
                        delete state["indent"];
                    }

                    continue
                }

                text += prepareText(child, state);
            } else {
                text += child.textContent || child.innerText;
            }
        }

        return text.trim()
    }

    inner.querySelector("#message-copy-text")?.addEventListener("click", () => {
        context.remove();
        const text = prepareText(messageContent);
        if (text) navigator.clipboard.writeText(text)
    })

    inner.querySelector("#message-copy-native-link")?.addEventListener("click", () => {
        context.remove();
        var text = "";

        if (channelMention) {
            const channel_id = channelMention.getAttribute("c");
            const guild_id = channelMention.getAttribute("g") || "@me";
            const message_id = channelMention.getAttribute("m");
            text = `https://discord.com/channels/${guild_id}/${channel_id}${message_id ? `/${message_id}`: ''}`
        } else {
            const ref = videoObj || element;
            text = ref.getAttribute("href") || ref.getAttribute("src") || ref.textContent;
        }

        if (text) navigator.clipboard.writeText(text)
    })

    inner.querySelector("#message-open-native-link")?.addEventListener("click", () => {
        context.remove();
        const ref = videoObj || element;

        var text = ref.getAttribute("href") || ref.getAttribute("src");

        if (text) window.open(text, "_blank", "noopener,noreferrer");
    })

    inner.querySelector("#message-devmode-copy-id")?.addEventListener("click", () => {
        context.remove();
        var text = "";

        if (channelMention) {
            text = channelMention.getAttribute("c");
        } else {
            text = message.id.split("|")[0];
        }
        if (text) navigator.clipboard.writeText(text)
    })

    context.appendChild(inner);
    document.body.appendChild(context);

    const x = event.clientX
    const y = event.clientY;

    const minY = window.innerHeight - inner.offsetHeight - 11;

    const adjustedY = y > minY ? minY : y;
    const adjustedX = x + inner.offsetWidth > window.innerWidth ? x - inner.offsetWidth : x;

    inner.style.top = `${adjustedY}px`;
    inner.style.left = `${adjustedX}px`
}

function removeArr(elem, arr) {
    let index = arr.indexOf(elem);
    if (index !== -1) {
        arr.splice(index, 1);
        return true;
    }
    return false;
}

function removeToolTip(tooltip) {
    if (tooltip) {
        tooltip.remove();
    }
}

function displayToolTip(elem, text) {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip"
    tooltip.innerHTML = `<span>${text}</span>`

    const rect = elem.getBoundingClientRect();

    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;

    tooltip.style.left = `${left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
    tooltip.style.top = `${top + rect.height - 72}px`;

    document.body.appendChild(tooltip);

    setTimeout(() => tooltip.style.opacity = 1, 0);

    return tooltip
}

/**
 * @param {HTMLElement} element
*/
function pollJump(element) {
    const message = element.closest('.message');
    const messageID = message.getAttribute("ref");
    if (messageID) {
        const reference = document.body.querySelector(`[id^='${messageID}']`);
        if (reference) flashTo(reference);
        else flashTo(element);
    }
}

/**
 * @param {HTMLElement} element
*/
function joinServer(element) {}

/**
 * @param {HTMLElement} element
*/
function hideResults(element) {
    const poll = element.closest(".poll");

    const hiddenSvg = [...poll.querySelectorAll("svg[style]"), ...poll.querySelectorAll(".multiBox")];
    const percentBars = poll.querySelectorAll(".votePercentageBar");
    const answerIcons = poll.querySelectorAll(".answerSelectionIcon");

    for (const answerIcon of answerIcons) {
        answerIcon.remove();
    }

    for (const percentBar of percentBars) {
        percentBar.remove();
    }

    for (const svg of hiddenSvg) {
        svg.removeAttribute("style");
        const votesData = svg.parentElement.querySelector(".votesData");
        if (votesData) votesData.remove()
    }

    const basicButton = poll.querySelector(".basicButton");

    const buttonParent = basicButton.parentElement;

    for (const hidden of buttonParent.querySelectorAll("[style]")) {
        hidden.removeAttribute("style");
    }

    basicButton.remove();
}

/**
 * @param {HTMLElement} element
*/
function showResults(element) {
    const poll = element.closest(".poll");
    const answers = poll.firstElementChild.nextElementSibling;
    const footer = answers.nextElementSibling;
    const showResults = footer.querySelector("[onclick]");
    const voteButton = showResults.nextElementSibling;

    for (const answer of answers.children) {
        const count = answer.getAttribute("count") || 0;
        const percent = answer.getAttribute("percent") || 0;
        const me = answer.hasAttribute("me");
        const svg = answer.querySelector("svg") || answer.querySelector(".multiBox");
        let extra = ""

        if (me) {
            extra += `<svg class="answerSelectionIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="var(--white-500)"></circle><path fill="var(--brand-500)" fill-rule="evenodd" d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm5.7-13.3a1 1 0 0 0-1.4-1.4L10 14.58l-2.3-2.3a1 1 0 0 0-1.4 1.42l3 3a1 1 0 0 0 1.4 0l7-7Z" clip-rule="evenodd"></path></svg>`
        }

        svg.previousElementSibling.outerHTML = `<span class="votePercentageBar${me ? ' me' : ''}" style="width: ${percent}%;"></span>` + svg.previousElementSibling.outerHTML

        svg.style.display = "none"
        svg.outerHTML += `<div class="votesData"><div>${count} vote${count != 1 ? 's' : ''}</div><div>${percent}%</div></div>${extra}`
    }

    showResults.style.display = "none";
    voteButton.style.display = "none";

    voteButton.outerHTML += `<div class="basicButton" onclick="hideResults(this)">Go back to vote</div>`
}

/**
 * @param {HTMLElement} search
*/
function handleSearch(search) {
    const headerSearch = search.closest(".header-search");
    const DraftEditor = search.closest(".DraftEditor");
    const placeholder = DraftEditor.querySelector(".DraftEditorPlaceholder-inner");
    const icon = headerSearch.querySelector(".visible");

    placeholder.textContent = ""

    const searchText = search.textContent;

    if (searchText == "") {
        if (icon.previousElementSibling) {icon.classList.remove("visible"); icon.previousElementSibling.classList.add("visible")}
        placeholder.textContent = "Search"
    } else {
        if (icon.nextElementSibling) {icon.classList.remove("visible"); icon.nextElementSibling.classList.add("visible")}
        placeholder.textContent = ""
    }
}

function searchFocus(event) {
    const headerSearch = event.closest(".header-search");
    headerSearch.style.width = "240px"
}

function searchBlur(event) {
    // const headerSearch = event.closest(".header-search");
    // headerSearch.style.width = ""
}

function handlePaste(event) {
    event.preventDefault();
    let pastedText = event.clipboardData.getData("text/plain");
    pastedText = pastedText.replace(/\n/g, ' ');
    document.execCommand("insertText", false, pastedText);
}

function checkxVisible(event) {
    if (!event.currentTarget.querySelector(".x-icon.visible")) {
        event.preventDefault();
        event.stopPropagation();
        return
    }
}

function handleMouseDown(event) {
    if (checkxVisible(event)) {event.preventDefault();event.stopPropagation();return;}
}

function handleClear(event) {
    if (checkxVisible(event)) {event.preventDefault();event.stopPropagation();return;}

    const headerSearch = event.currentTarget.closest(".header-search");
    const editorContent = headerSearch.querySelector(".public-DraftEditor-content");

    editorContent.textContent = ""
    const inputEvent = new Event("input");
    editorContent.dispatchEvent(inputEvent);
    editorContent.focus();
}

function preventNewLine(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();
    }
}

/**
 * @param {HTMLElement} editor
*/
function editorMouseDown(editor) {}

function formatTime(seconds) {
    if (isNaN(seconds)) seconds = 0;
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

function setFullscreen(container) {
    if (container.requestFullscreen) {
        container.requestFullscreen();
    } else if (container.mozRequestFullScreen) {
        container.mozRequestFullScreen();
    } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen();
    }
}

function unsetFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

function isFullScreen() {
    return (document.fullscreenElement || 
              document.mozFullScreenElement || 
              document.webkitFullscreenElement || 
              document.msFullscreenElement);
}
