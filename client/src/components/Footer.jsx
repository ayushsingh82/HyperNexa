import React from 'react'

function Footer() {
  return (
    <footer class="font-sans tracking-wide bg-white py-10 px-12 mt-[30px] border-2 border-transparent   w-full  mt-[40px]">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
      <div>
        <h4 class="text-slate-900 text-lg font-semibold mb-6">Company</h4>
        <ul class="space-y-5">
          <li><a href="javascript:void(0)" class="text-slate-900 ">About Us</a></li>
          <li><a href="javascript:void(0)" class="text-slate-900">Contact</a></li>
          <li><a href="javascript:void(0)" class="text-slate-900">Careers</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-slate-900 text-lg font-semibold mb-6">Information</h4>
        <ul class="space-y-5">
          <li><a href="javascript:void(0)" class="text-slate-900 ">Privacy Policy</a></li>
          <li><a href="javascript:void(0)" class="text-slate-900">Terms of Service</a></li>
          <li><a href="javascript:void(0)" class="text-slate-900 ">Refund Policy</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-slate-900 text-lg font-semibold mb-6">Help</h4>
        <ul class="space-y-5">
          <li><a href="javascript:void(0)" class="text-slate-900 ">FAQs</a></li>
          <li><a href="javascript:void(0)" class="text-slate-900">Shipping Information</a></li>
          <li><a href="javascript:void(0)" class="text-slate-900 ">Returns & Exchanges</a></li>
        </ul>
      </div>

      <div class="col-span-full max-w-2xl">
        <h4 class="text-slate-900 text-lg font-semibold mb-6">Newsletter</h4>
        <p class="text-blue-900 mb-4 text-[15px]">Subscribe to our newsletter to get updates on new products and promotions.
        </p>

        <form class="mb-4">
          <div class="flex items-center">
            <input type="email" placeholder="Enter your email"
              class="bg-gray-800 px-4 py-3.5 rounded-l-md w-full text-[15px] text-gray-300 outline-none" />
            <button type="button"
              class="bg-gray-700 text-[15px] text-gray-300 tracking-wide px-4 py-3.5 rounded-r-md">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <p class='text-slate-900 text-right text-[15px] mt-8'>© 2023<a href='https://readymadeui.com/' target='_blank'
      class="text-slate-900 hover:underline mx-1">HyperNexa</a>All Rights Reserved.
    </p>
  </footer>
  )
}

export default Footer
