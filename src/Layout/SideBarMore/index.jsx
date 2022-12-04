import React from 'react';
import cn from "classnames";
import follow from '../../assets/Follow.svg';
import cs from './style.module.scss';

const SideBarMore = ({className , ...props}) => {
	return (
		<div {...props} className={cn(cs.sideBarMore , className)}>

			<div className={cs.user_profile}>
				<img
					className={cs.avatar}
					src='https://avatars.githubusercontent.com/u/74928310?v=4'
					alt=""
				/>
				<div className={cs.container_name}>
					<h1>Almaz Eshimbekov</h1>
					<p>almazesh</p>
				</div>
			</div>

			<div className={cs.container_follow}>

				<div className={cs.container_bio_followers}>
					<div className={cs.container_bio}>
						<p>
							Never lose yourself
						</p>
					</div>
					<div className={cs.container_followers}>
						<img className={cs.icon} src={follow} alt=""/>
						<p><span>2</span>followers</p>
						<p><span>7</span>following</p>
					</div>
				</div>

				<button className={cs.btn}>Follow</button>
			</div>

			<div className={cs.achievements}>
				<h1>Achievements</h1>
				<div className={cs.container_achievements}>
					<img src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" alt=""/>
					<img src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" alt=""/>
				</div>
				<div className={cs.container_btn_feedback}>
					<button>Beta</button>
					<button>Send feedback</button>
				</div>
				<p className={cs.lorem}>Block or Report</p>
			</div>

		</div>
	);
};

export default SideBarMore;