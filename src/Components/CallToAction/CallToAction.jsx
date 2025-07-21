import React from "react";

function CallToAction() {
  return (
    <div>
      <div class="w-full h-52 rounded-2xl bg-white mb-[-100px] relative overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div class="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full blur-[100px] opacity-40"></div>

          <div class="absolute top-0 right-0 w-80 h-80 bg-orange-300 rounded-full blur-[100px] opacity-40"></div>
        </div>

        <div class="relative z-10 pt-[35px]">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h4 className="text-[20px] md:text-[32px] font-bold">Subscribe to our Newsletter</h4>
              <p className="text-[14px] md:text-[16px] font-normal py-3">Get the latest updates and news right in your inbox!</p>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="border border-gray-300 px-3 py-2 rounded-sm mr-2"
                />
                <input type="submit" value="Subscribe" className="cursor-pointer px-3 py-2 rounded-sm bg-gradient-to-r from-yellow-300 via-pink-300 to-rose-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
