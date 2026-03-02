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
export const textsUI = `
	_type == 'textsUI' => {
		...,
		backgroundImage{
			...,
			asset->
		},
    items[]{
      ${blockContent}
    }
	}
`;

export const textImageUI = `
	_type == 'textImageUI' => {
		...,
		text{
			${blockContent}
		},
		image{
			${figure}
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
export const imagesUI = `
  _type == 'imagesUI' => {
    ...,
    items[]{
      ...,
      image{
        ...,
        asset->
      }
    }
  }
`;

export const logosUI = `
  _type == 'logosUI' => {
    ...,
    items[]{
      ...,
      image{
        ...,
        asset->
      }
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
export const listLPageUI = `
	_type == 'listPageUI' => {
		...,
		navTags[]->,
		items[]-> {
			...,
			imageCover{
				...,
				asset->
			},
			tags[]->
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
			},
			text{
				${blockContent}
			},
      tagFilter->{
        title,
        slug
      }
		},
    navTags[]->{
      title,
      slug
    }
	}
	`;

export const sliderCardImageTextUI = `
	_type == 'sliderCardImageTextUI' => {
		...,
		items[] {
			...,
			image{
				...,
				asset->
			},
			text{
				${blockContent}
			},
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
      ${imagesUI},
      ${logosUI},
			${textUI},
			${textsUI},
			${textImageUI},
			${contactsUI},
			${listStudioUI},
			${listLPageUI},
			${callOutUI},
			${listLModulaireUI},
			${splitImageTextUI},
			${heroSplitScrollUI},
			${listCardImageTextUI},
			${heroSplitUI},
			${sliderCardImageTextUI}
		},
	}
}
`;

export const modules = `
	...,
	${heroUI},
  ${imagesUI},
  ${logosUI},
	${textUI},
	${textsUI},
	${textImageUI},
	${contactsUI},
	${listStudioUI},
	${listLPageUI},
	${listLieuUI},
	${callOutUI},
	${listLModulaireUI},
	${splitImageTextUI},
	${heroSplitScrollUI},
	${listCardImageTextUI},
	${heroSplitUI},
	${sliderCardImageTextUI}
`;
