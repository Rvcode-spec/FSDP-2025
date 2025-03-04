import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="w-full fixed bottom-0">
            <footer class="w-full bg-gray-900 text-white p-6">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                        <h2 class="font-bold">Company</h2>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="font-bold">Help</h2>
                        <ul>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="font-bold">Follow Us</h2>
                        <div class="flex gap-4">
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>
                    <div>
                        <h2 class="font-bold">Newsletter</h2>
                        <input type="email" placeholder="Enter your email" class="p-2 text-black" />
                        <button class="bg-yellow-500 px-4 py-2">Subscribe</button>
                    </div>
                </div>
                <p class="text-center mt-4">© 2025 YourWebsite. All rights reserved.</p>
            </footer>


        </div>
    )
}
