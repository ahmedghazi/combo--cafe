export const seo = `
	...,
	metaImage{
		asset->
	}
`;

export const figure = `
	...,
	image{
		asset->
	},
	caption,
	link->{
		_type,
		slug
	}
`;

export const blockContent = `
	...,
	en[]{
		...,
		markDefs[] {
			...,
			_type == "linkInternal" => {
				...,
				reference->,

			},
			_type == "linkInternalCta" => {
				...,
				reference->,

			}
		}
	},
	fr[]{
		...,
		markDefs[] {
			...,
			_type == "linkInternal" => {
				...,
				reference->,

			},
			_type == "linkInternalCta" => {
				...,
				reference->{
					_type,
					slug
				}

			}
		}
	}
`;
// export const imageUI = `
// 	_type == 'imageUI' => {
// 		...,
// 		image {
// 			...,
// 			asset->
// 		}
// 	}
// `;

export const textUI = `
	_type == 'textUI' => {
		...,
		text{
			${blockContent}
		},
		backgroundImage{
			...,
			asset->
		}
	}
`;

export const heroUI = `
	_type == 'heroUI' => {
		...,
		image {
			...,
			asset->
		}
	}
`;

export const contactsUI = `
	_type == 'contactsUI' => {
		...,
		items[] {
			...,
		}
	}
`;

export const listStudioUI = `
	_type == 'listStudioUI' => {
		...,
		items[]-> {
			...,
			sliderHero[]{
				image {
					...,
					asset->
				}
			}
			// modules[]{
			// 	...
  		// },
		}
	}
`;

export const listLModulaireUI = `
	_type == 'listLModulaireUI' => {
		...,
		items[] {
			...,
			backgroundImage{
				...,
				asset->
			}
		}
	}
`;

export const callOutUI = `
	_type == 'callOutUI' => {
		...,
		backgroundImage{
			...,
			asset->
		}
	}
`;

export const splitImageTextUI = `
	_type == 'splitImageTextUI' => {
		...,
		image{
			...,
			asset->
		},
		text{
			${blockContent}
		}
	}
`;

export const heroSplitScrollUI = `
	_type == 'heroSplitScrollUI' => {
		...,
		itemsLeft[]{
			...,
			image{
				asset->
			}
		},
		itemsRight[]{
			...,
			image{
				asset->
			}
		}
	}
`;

export const heroSplitUI = `
	_type == 'heroSplitUI' => {
		...,
		itemsLeft{
			...,
			image{
				asset->
			}
		},
		itemsRight{
			...,
			image{
				asset->
			}
		}
	}
`;

export const listCardImageTextUI = `
	_type == 'listCardImageTextUI' => {
		...,
		items[] {
			...,
			image{
				...,
				asset->
			}
		}
	}
	`;

export const listLieuUI = `
_type == 'listLieuUI' => {
	...,
	items[]-> {
		...,
		modules[]{
			...,
			${heroUI},
			${textUI},
			${contactsUI},
			${listStudioUI},
			${callOutUI},
			${listLModulaireUI},
			${splitImageTextUI},
			${heroSplitScrollUI},
			${listCardImageTextUI},
			${heroSplitUI}
		},
	}
}
`;

export const modules = `
	...,
	${heroUI},
	${textUI},
	${contactsUI},
	${listStudioUI},
	${listLieuUI},
	${callOutUI},
	${listLModulaireUI},
	${splitImageTextUI},
	${heroSplitScrollUI},
	${listCardImageTextUI},
	${heroSplitUI}
`;
