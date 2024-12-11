import {RiTeamLine} from 'react-icons/ri'

export default {
  name: 'moduleTrombinoscope',
  title: 'Tombinoscope',
  type: 'object',
  icon: RiTeamLine,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titre',
    },
    {
      name: 'members',
      type: 'array',
      of: [{type: 'teamMember'}],
    },
  ],
}
