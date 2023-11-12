"use client";
import Image from "next/image";
import illustration_desktop from "../../public/illustration-sign-up-desktop.svg";
import illustration_mobile from "../../public/illustration-sign-up-mobile.svg";
import icon_list from "../../public/icon-list.svg";
import icon_success from "../../public/icon-success.svg";
import { useState } from "react";

export default function Home() {
	const [email, setEmail] = useState<string>("");
	const [isSuccess, setIsSuccess] = useState<boolean>(true);
	return (
		<main className="flex items-center justify-center lg:bg-grey-charcoal h-screen">
			{isSuccess ? (
				<div className="bg-white flex flex-col lg:flex-row-reverse rounded-3xl lg:p-4 lg:items-center lg:gap-10">
					<section>
						<div className="lg:hidden">
							<Image
								src={illustration_mobile}
								alt={
									"Graphics, computers and numbers illustration "
								}
							/>
						</div>
						<div className="hidden lg:block">
							<Image
								src={illustration_desktop}
								alt={
									"Graphics, computers and numbers illustration "
								}
							/>
						</div>
					</section>
					<section className="p-5 max-w-md ">
						<h1 className="text-grey-slate text-4xl font-bold py-4 lg:text-6xl">
							Stay Updated!
						</h1>
						<p>
							Join 60,000+ product managers receiving monthly
							updates on:
						</p>
						<div className="flex flex-col gap-2 py-8 ">
							<div className="list">
								<Image src={icon_list} alt="Success icon" />
								<p>
									Product discovery and building what matters
								</p>
							</div>
							<div className="list">
								<Image src={icon_list} alt="Success icon" />
								<p>Measuring to ensure updates are a success</p>
							</div>
							<div className="list">
								<Image src={icon_list} alt="Success icon" />
								<p>And much more!</p>
							</div>
						</div>
						<form action="" className="flex flex-col gap-4">
							<div className="flex flex-col gap-2  ">
								<label
									className="text-xs text-grey-slate font-bold"
									htmlFor=""
								>
									Email address
								</label>
								<input
									placeholder="email@company.com"
									className="p-4 placeholder:text-grey-default border rounded-lg ring-0 focus:outline-grey-slate text-grey-charcoal "
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<button
								onClick={() => setIsSuccess(false)}
								className="text-white bg-grey-slate rounded-lg font-bold p-4 hover:bg-gradient-to-r hover:from-[hsl(347,100%,66%)] hover:to-[hsl(14,100%,62%)] hover:shadow-lg hover:shadow-tomato/60"
							>
								Subscribe to monthly newsletter
							</button>
						</form>
					</section>
				</div>
			) : (
				<div className="flex flex-col bg-white h-screen justify-center px-6 py-10 rounded-3xl lg:p-4">
					<div className="m-auto">
						<Image src={icon_success} alt="Success icon" />
						<h1 className="text-grey-slate text-4xl font-bold py-4 lg:text-6xl">
							Thanks for subscribing!
						</h1>
						<p>
							A confirmation email has been sent to{" "}
							<strong>{email}</strong>. Please open it and click
							the button inside to confirm your subscription
						</p>
					</div>
					<button
						onClick={() => setIsSuccess(true)}
						className=" text-white bg-grey-slate rounded-lg font-bold p-4 hover:bg-gradient-to-r hover:from-[hsl(347,100%,66%)] hover:to-[hsl(14,100%,62%)] hover:shadow-lg hover:shadow-tomato/60"
					>
						Dismiss message
					</button>
				</div>
			)}
		</main>
	);
}
