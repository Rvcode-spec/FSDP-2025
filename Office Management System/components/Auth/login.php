<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body class="bg-black">
    <div class="flex w-full mx-auto h-screen items-center justify-center">
        <div class="left w-1/2 flex ">
            <img src="" class="w-100 items-center " alt="">

        </div>

        <div class="right ml-30  flex flex-col p-8 w-1/3 h-auto items-center justify-center bg-white shadow-xl rounded-2xl ">
            <h1 class='text-2xl font-bold  mb-4  underline-offset-4  text-orange-400'>Log in</h1>

            <input class="w-80  lowercase text-ms  py-3 px-2 h-12 my-2 border-1 border border-gray-300 outline-blue-400 rounded-lg" type="text" placeholder="enter the username">
            <input class="w-80  lowercase text-ms  py-3 px-2 h-12 my-2 border-1 border border-gray-300 outline-blue-400 rounded-lg" type="password" placeholder="enter the password">

            <button class="my-3 border-1 border-gray-400 outline-violet-400 text-white text-xl cursor-pointer bg-fuchsia-600  hover:bg-fuchsia-700 capitalize hover:shadow-2xl shadow-blue-700 py-2 px-3 w-40 rounded-2xl font-bold">submit</button>

            <span class="text-center cursor-pointer  text-gray-700 hover:underline py-1">Forgotten password?</span>

            <div class="text-sm font-bold text-fuchsia-500 mt-0 hover:underline  hover:text-base hover:text-fuchsia-700 ">
                <p class='mt-4 '><a href="./signup.php">
                    Already have an account?
                    <span onClick="showSignup()" class='cursor-pointer'>
                        Login
                    </span>
                    </a>
                </p>
            </div>

        </div>



    </div>

</body>

</html>