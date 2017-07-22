'use strict'

let assert = require('assert')
let isPath = require('./')


assert.ok(isPath('M0 0L10 20 20 0Z'))
assert.ok(!isPath('H0'))
assert.ok(!isPath('M00Z'))
assert.ok(!isPath('M00Z'))
assert.ok(!isPath('xyz'))
assert.ok(isPath(`M 300,200 h-150 a150,150 0 1,0 150,-150 z`))
assert.ok(isPath(`M600,350 l 50,-25             a25,25 -30 0,1 50,-25 l 50,-25             a25,50 -30 0,1 50,-25 l 50,-25             a25,75 -30 0,1 50,-25 l 50,-25             a25,100 -30 0,1 50,-25 l 50,-25
    `))
assert.ok(isPath(`M0 1665q0 38 29 64 27 27 65 27h627q41 0 72.5 30t31.5 73-31.5 74-72.5 31-73-32q-29-26-65-26-38 0-64 25.5t-26 63.5 26 64q85 85 202 85 118 0 201-83.5t83-201.5-83-202-201-84H94q-38 0-66 27.5T0 1665zm0-321q0 35 29 61 27 27 65 27h1170q118 0 201.5-83.5T1549 1147t-83-200-202-82q-121 0-201 81-25 26-25 65t24.5 63.5 63.5 24.5q38 0 66-25 30-30 72-30t72.5 30 30.5 73-30.5 74-72.5 31H94q-38 0-66 27.5T0 1344zm283-251q0 13 18 13h153q11 0 21-15 36-87 111.5-143.5T757 884l56-8q20 0 20-18l7-55q17-173 146-289t304-116q176 0 305.5 115.5T1743 803l7 62q0 19 19 19h174q144 0 245.5 100.5T2290 1227q0 143-101.5 244.5T1943 1573h-736q-20 0-20 19v146q0 18 20 18h736q143 0 264.5-71t192-193 70.5-265q0-118-45-216 121-159 121-353 0-150-75.5-279T2266 174.5 1987 99q-247 0-412 185-128-65-285-65-225 0-398 139.5T672 715q-136 32-240.5 131T286 1080v4q-3 5-3 9zM1155-83q0 37 29 64l65 69q26 26 65 26 40 0 65.5-24.5T1405-13q0-38-24-64l-70-69q-25-28-63-28t-65.5 27-27.5 64zm568 470q115-109 264-109 155 0 267.5 112T2367 658q0 104-55 195-153-153-369-153h-36q-38-173-184-313zm173-559q0 37 26.5 62.5T1987-84t65-25.5 27-62.5v-218q0-38-27-65t-65-27-64.5 27-26.5 65v218zm592 242q0 39 24 64 27 27 65 27.5t61-27.5l156-153q27-27 27-65 0-37-27-64t-65-27-64 26L2512 8q-24 25-24 62zm82 1262q0 37 27 64l68 69q32 26 66 26 31 0 63-26 27-27 27-64 0-35-27-65l-68-69q-26-26-62-26-40 0-67 26.5t-27 64.5zm161-674q0 38 27 63 24 28 61 28h216q38 0 65-27t27-64-27.5-64.5T3035 566h-216q-38 0-63 27t-25 65z`))
assert.ok(!isPath('Midnight Jazz'))
