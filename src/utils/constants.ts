import { Generations } from '../types/pokemon';

export const mappedColorTypes = {
  normal: {
    bgThinHover: 'hover:bg-gray-100',
    bgLight: 'bg-gray-300',
    bgNormal: 'bg-gray-400',
    bgMedium: 'bg-gray-700',
    textMedium: 'text-gray-700',
    borderMedium: 'border-gray-700',
    bgDarkHover: 'hover:bg-gray-800',
  },
  fire: {
    bgThinHover: 'hover:bg-red-100',
    bgLight: 'bg-red-300',
    bgNormal: 'bg-red-400',
    bgMedium: 'bg-red-700',
    textMedium: 'text-red-700',
    borderMedium: 'border-red-700',
    bgDarkHover: 'hover:bg-red-800',
  },
  water: {
    bgThinHover: 'hover:bg-blue-100',
    bgLight: 'bg-blue-300',
    bgNormal: 'bg-blue-400',
    bgMedium: 'bg-blue-700',
    textMedium: 'text-blue-700',
    borderMedium: 'border-blue-700',
    bgDarkHover: 'hover:bg-blue-800',
  },
  grass: {
    bgThinHover: 'hover:bg-green-100',
    bgLight: 'bg-green-300',
    bgNormal: 'bg-green-400',
    bgMedium: 'bg-green-700',
    textMedium: 'text-green-700',
    borderMedium: 'border-green-700',
    bgDarkHover: 'hover:bg-green-800',
  },
  electric: {
    bgThinHover: 'hover:bg-yellow-100',
    bgLight: 'bg-yellow-300',
    bgNormal: 'bg-yellow-400',
    bgMedium: 'bg-yellow-700',
    textMedium: 'text-yellow-700',
    borderMedium: 'border-yellow-700',
    bgDarkHover: 'hover:bg-yellow-800',
  },
  ice: {
    bgThinHover: 'hover:bg-blue-100',
    bgLight: 'bg-blue-300',
    bgNormal: 'bg-blue-400',
    bgMedium: 'bg-blue-700',
    textMedium: 'text-blue-700',
    borderMedium: 'border-blue-700',
    bgDarkHover: 'hover:bg-blue-800',
  },
  fighting: {
    bgThinHover: 'hover:bg-red-100',
    bgLight: 'bg-red-300',
    bgNormal: 'bg-red-400',
    bgMedium: 'bg-red-700',
    textMedium: 'text-red-700',
    borderMedium: 'border-red-700',
    bgDarkHover: 'hover:bg-red-800',
  },
  poison: {
    bgThinHover: 'hover:bg-purple-100',
    bgLight: 'bg-purple-300',
    bgNormal: 'bg-purple-400',
    bgMedium: 'bg-purple-700',
    textMedium: 'text-purple-700',
    borderMedium: 'border-purple-700',
    bgDarkHover: 'hover:bg-purple-800',
  },
  ground: {
    bgThinHover: 'hover:bg-yellow-100',
    bgLight: 'bg-yellow-300',
    bgNormal: 'bg-yellow-400',
    bgMedium: 'bg-yellow-700',
    textMedium: 'text-yellow-700',
    borderMedium: 'border-yellow-700',
    bgDarkHover: 'hover:bg-yellow-800',
  },
  flying: {
    bgThinHover: 'hover:bg-indigo-100',
    bgLight: 'bg-indigo-300',
    bgNormal: 'bg-indigo-400',
    bgMedium: 'bg-indigo-700',
    textMedium: 'text-indigo-700',
    borderMedium: 'border-indigo-700',
    bgDarkHover: 'hover:bg-indigo-800',
  },
  psychic: {
    bgThinHover: 'hover:bg-pink-100',
    bgLight: 'bg-pink-300',
    bgNormal: 'bg-pink-400',
    bgMedium: 'bg-pink-700',
    textMedium: 'text-pink-700',
    borderMedium: 'border-pink-700',
    bgDarkHover: 'hover:bg-pink-800',
  },
  bug: {
    bgThinHover: 'hover:bg-green-100',
    bgLight: 'bg-green-300',
    bgNormal: 'bg-green-400',
    bgMedium: 'bg-green-700',
    textMedium: 'text-green-700',
    borderMedium: 'border-green-700',
    bgDarkHover: 'hover:bg-green-800',
  },
  rock: {
    bgThinHover: 'hover:bg-gray-100',
    bgLight: 'bg-gray-300',
    bgNormal: 'bg-gray-400',
    bgMedium: 'bg-gray-700',
    textMedium: 'text-gray-700',
    borderMedium: 'border-gray-700',
    bgDarkHover: 'hover:bg-gray-800',
  },
  ghost: {
    bgThinHover: 'hover:bg-indigo-100',
    bgLight: 'bg-indigo-300',
    bgNormal: 'bg-indigo-400',
    bgMedium: 'bg-indigo-700',
    textMedium: 'text-indigo-700',
    borderMedium: 'border-indigo-700',
    bgDarkHover: 'hover:bg-indigo-800',
  },
  dark: {
    bgThinHover: 'hover:bg-gray-100',
    bgLight: 'bg-gray-300',
    bgNormal: 'bg-gray-400',
    bgMedium: 'bg-gray-700',
    textMedium: 'text-gray-700',
    borderMedium: 'border-gray-700',
    bgDarkHover: 'hover:bg-gray-800',
  },
  dragon: {
    bgThinHover: 'hover:bg-purple-100',
    bgLight: 'bg-purple-300',
    bgNormal: 'bg-purple-400',
    bgMedium: 'bg-purple-700',
    textMedium: 'text-purple-700',
    borderMedium: 'border-purple-700',
    bgDarkHover: 'hover:bg-purple-800',
  },
  steel: {
    bgThinHover: 'hover:bg-gray-100',
    bgLight: 'bg-gray-300',
    bgNormal: 'bg-gray-400',
    bgMedium: 'bg-gray-700',
    textMedium: 'text-gray-700',
    borderMedium: 'border-gray-700',
    bgDarkHover: 'hover:bg-gray-800',
  },
  fairy: {
    bgThinHover: 'hover:bg-pink-100',
    bgLight: 'bg-pink-300',
    bgNormal: 'bg-pink-400',
    bgMedium: 'bg-pink-700',
    textMedium: 'text-pink-700',
    borderMedium: 'border-pink-700',
    bgDarkHover: 'hover:bg-pink-800',
  },
};

export const generations: Generations = {
  151: 'I',
  251: 'II',
  386: 'III',
  493: 'IV',
  649: 'V',
  721: 'VI',
  809: 'VII',
  898: 'VIII',
};

export const MAX_STAT = 150;
