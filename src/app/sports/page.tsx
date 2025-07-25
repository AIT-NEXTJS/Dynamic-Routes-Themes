import Link from 'next/link';

export default function Sports() {
	return (
		<div className='max-w-3xl mx-auto p-6'>
			<h1 className='text-3xl font-bold mb-6 text-center text-orange-300'>Курсы по видам спорта</h1>
			<ul className='space-y-4'>
				<li className='border border-gray-700 p-4 rounded'>
					<Link href='/sports/football' className='block hover:text-orange-300 transition'>
						<span className='text-orange-300 font-semibold'>Футбол:</span> Научитесь основам футбольной техники и тактики.
					</Link>
				</li>
				<li className='border border-gray-700 p-4 rounded'>
					<Link href='/sports/tennis' className='block hover:text-orange-300 transition'>
						<span className='text-orange-300 font-semibold'>Теннис:</span> Изучите подачу, удары и стратегию игры.
					</Link>
				</li>
				<li className='border border-gray-700 p-4 rounded'>
					<Link href='/sports/swimming' className='block hover:text-orange-300 transition'>
						<span className='text-orange-300 font-semibold'>Плавание:</span> Освойте стили плавания и правильную технику.
					</Link>
				</li>
			</ul>
		</div>
	);
}
