import unison from '../assets/images/intervals/0_unison.png'
import minorSecond from '../assets/images/intervals/1_minor_second.png'
import majorSecond from '../assets/images/intervals/2_major_second.png'
import minorThird from '../assets/images/intervals/3_minor_third.png'
import majorThird from '../assets/images/intervals/4_major_third.png'
import perfectFourth from '../assets/images/intervals/5_perfect_fourth.png'
import tritone from '../assets/images/intervals/6_tritone.png'
import perfectFifth from '../assets/images/intervals/7_perfect_fifth.png'
import minorSixth from '../assets/images/intervals/8_minor_sixth.png'
import majorSixth from '../assets/images/intervals/9_major_sixth.png'
import minorSeventh from '../assets/images/intervals/10_minor_seventh.png'
import majorSeventh from '../assets/images/intervals/11_major_seventh.png'
import octave from '../assets/images/intervals/12_octave.png'

export const intervals = [
    {
        name: 'Unison',
        size: 0,
        image: {
            link: unison,
            alt: 'The note C on a staff, representing a unison interval.'
        }
    },
    {
        name: 'Minor Second',
        size: 1,
        image: {
            link: minorSecond,
            alt: 'The notes C and D flat on a staff, representing a minor second interval.'
        }
    },
    {
        name: 'Major Second',
        size: 2,
        image: {
            link: majorSecond,
            alt: 'The notes C and D on a staff, representing a major second interval.'
        }
    },
    {
        name: 'Minor Third',
        size: 3,
        image: {
            link: minorThird,
            alt: 'The notes C and E flat on a staff, representing a minor third interval.'
        }
    },
    {
        name: 'Major Third',
        size: 4,
        image: {
            link: majorThird,
            alt: 'The notes C and E on a staff, representing a major third interval.'
        }
    },
    {
        name: 'Perfect Fourth',
        size: 5,
        image: {
            link: perfectFourth,
            alt: 'The notes C and F on a staff, representing a perfect fourth interval.'
        }
    },
    {
        name: 'Tritone',
        size: 6,
        image: {
            link: tritone,
            alt: 'The notes C and G flat on a staff, representing a tritone interval.'
        }
    },
    {
        name: 'Perfect Fifth',
        size: 7,
        image: {
            link: perfectFifth,
            alt: 'The notes C and G on a staff, representing a perfect fifth interval.'
        }
    },
    {
        name: 'Minor Sixth',
        size: 8,
        image: {
            link: minorSixth,
            alt: 'The notes C and A flat on a staff, representing a minor sixth interval.'
        }
    },
    {
        name: 'Major Sixth',
        size: 9,
        image: {
            link: majorSixth,
            alt: 'The notes C and A on a staff, representing a major sixth interval.'
        }
    },
    {
        name: 'Minor Seventh',
        size: 10,
        image: {
            link: minorSeventh,
            alt: 'The notes C and B flat on a staff, representing a minor seventh interval.'
        }
    },
    {
        name: 'Major Seventh',
        size: 11,
        image: {
            link: majorSeventh,
            alt: 'The notes C and B on a staff, representing a major seventh interval.'
        }
    },
    {
        name: 'Octave',
        size: 12,
        image: {
            link: octave,
            alt: 'The notes C and C on a staff, representing an octave interval.'
        }
    },
]