
import { GalleryImage, Room } from './types';

export const LOGO_URL = "https://i.ibb.co/chr9W07p/56271621-2032616003698926-7527613592846204928-n-Photoroom.png";

export const GALLERY_DATA: GalleryImage[] = [
  // Rooms (32)
  { id: 'r1', category: 'rooms', url: 'https://i.ibb.co/GQjB3YQz/56271621-2032616003698926-7527613592846204928-n-Photoroom.png' },
  { id: 'r2', category: 'rooms', url: 'https://i.ibb.co/8gq9XTjH/256668391-1.jpg' },
  { id: 'r3', category: 'rooms', url: 'https://i.ibb.co/CsbMzZK3/256668391.jpg' },
  { id: 'r4', category: 'rooms', url: 'https://i.ibb.co/77YwSTG/256668397.jpg' },
  { id: 'r5', category: 'rooms', url: 'https://i.ibb.co/2YjCw8qH/256668402.jpg' },
  { id: 'r6', category: 'rooms', url: 'https://i.ibb.co/FLbRvfcy/256668418-1.jpg' },
  { id: 'r7', category: 'rooms', url: 'https://i.ibb.co/PsMKzR9H/256668418.jpg' },
  { id: 'r8', category: 'rooms', url: 'https://i.ibb.co/nVpH72Z/205530606-1.jpg' },
  { id: 'r9', category: 'rooms', url: 'https://i.ibb.co/21bGX6BK/205530606.jpg' },
  { id: 'r10', category: 'rooms', url: 'https://i.ibb.co/QjpxtSTV/205530609.jpg' },
  { id: 'r11', category: 'rooms', url: 'https://i.ibb.co/VpTBSxB0/205530614-1.jpg' },
  { id: 'r12', category: 'rooms', url: 'https://i.ibb.co/fGpvDmV8/205530621-1.jpg' },
  { id: 'r13', category: 'rooms', url: 'https://i.ibb.co/HLRHTDdk/205530621.jpg' },
  { id: 'r14', category: 'rooms', url: 'https://i.ibb.co/N2S7NJyw/205530624.jpg' },
  { id: 'r15', category: 'rooms', url: 'https://i.ibb.co/LD3hmxCW/205530631-1.jpg' },
  { id: 'r16', category: 'rooms', url: 'https://i.ibb.co/F4kn0PKH/205530634-1.jpg' },
  { id: 'r17', category: 'rooms', url: 'https://i.ibb.co/nM4qc3r9/205530634.jpg' },
  { id: 'r18', category: 'rooms', url: 'https://i.ibb.co/jPWnNVYX/207411607.jpg' },
  { id: 'r19', category: 'rooms', url: 'https://i.ibb.co/gZKcH3vd/207413628.jpg' },
  { id: 'r20', category: 'rooms', url: 'https://i.ibb.co/Gv6MqBV6/256667146.jpg' },
  { id: 'r21', category: 'rooms', url: 'https://i.ibb.co/VpHQ9jtx/256667152-1.jpg' },
  { id: 'r22', category: 'rooms', url: 'https://i.ibb.co/2YMYz21R/256667156-1.jpg' },
  { id: 'r23', category: 'rooms', url: 'https://i.ibb.co/rG7SVNG1/256667156.jpg' },
  { id: 'r24', category: 'rooms', url: 'https://i.ibb.co/cVWw6GN/256668154.jpg' },
  { id: 'r25', category: 'rooms', url: 'https://i.ibb.co/W4VmkYzC/256668156-1.jpg' },
  { id: 'r26', category: 'rooms', url: 'https://i.ibb.co/B5P3vCJP/256668159-1.jpg' },
  { id: 'r27', category: 'rooms', url: 'https://i.ibb.co/Z1YfKYfd/256668159.jpg' },
  { id: 'r28', category: 'rooms', url: 'https://i.ibb.co/6Rjg3XKr/256668163.jpg' },
  { id: 'r29', category: 'rooms', url: 'https://i.ibb.co/B57KpYhp/256668386.jpg' },
  // Views (18)
  { id: 'v1', category: 'views', url: 'https://i.ibb.co/d8dBpQC/205530618.jpg' },
  { id: 'v2', category: 'views', url: 'https://i.ibb.co/TDxFv24d/205530626.jpg' },
  { id: 'v3', category: 'views', url: 'https://i.ibb.co/PZdQj5zq/205530643.jpg' },
  { id: 'v4', category: 'views', url: 'https://i.ibb.co/xqt7Gcb9/207411607.jpg' },
  { id: 'v5', category: 'views', url: 'https://i.ibb.co/7JCYnRSG/207411654.jpg' },
  { id: 'v6', category: 'views', url: 'https://i.ibb.co/DHyGTjpw/207412015.jpg' },
  { id: 'v7', category: 'views', url: 'https://i.ibb.co/sZj9XxG/256667161.jpg' },
  { id: 'v8', category: 'views', url: 'https://i.ibb.co/hR1G9dby/256668173.jpg' },
  { id: 'v9', category: 'views', url: 'https://i.ibb.co/xtMT0dVL/256668182.jpg' },
  { id: 'v10', category: 'views', url: 'https://i.ibb.co/vvmRRw8P/256668407.jpg' },
  { id: 'v11', category: 'views', url: 'https://i.ibb.co/d4pFQ49M/256668422.jpg' },
  { id: 'v12', category: 'views', url: 'https://i.ibb.co/m5MMG03B/274812757.jpg' },
  { id: 'v13', category: 'views', url: 'https://i.ibb.co/3ydhj45w/274812800.jpg' },
  { id: 'v14', category: 'views', url: 'https://i.ibb.co/SD7X1LsB/274813080.jpg' },
  { id: 'v15', category: 'views', url: 'https://i.ibb.co/NgkZRJwb/274813228.jpg' },
  { id: 'v16', category: 'views', url: 'https://i.ibb.co/0VWkQ46P/274813453.jpg' },
  { id: 'v17', category: 'views', url: 'https://i.ibb.co/mFd1s0Ts/274813613.jpg' },
  { id: 'v18', category: 'views', url: 'https://i.ibb.co/xqWWswCj/274813806.jpg' },
  // Facilities (28)
  { id: 'f1', category: 'facilities', url: 'https://i.ibb.co/mCsBTmd3/256667164.jpg' },
  { id: 'f2', category: 'facilities', url: 'https://i.ibb.co/s9259j3n/256667168.jpg' },
  { id: 'f3', category: 'facilities', url: 'https://i.ibb.co/8gWDMm9t/256667172.jpg' },
  { id: 'f4', category: 'facilities', url: 'https://i.ibb.co/HfvSv4Wv/256667177.jpg' },
  { id: 'f5', category: 'facilities', url: 'https://i.ibb.co/Z6C0ShbL/256667180.jpg' },
  { id: 'f6', category: 'facilities', url: 'https://i.ibb.co/svgM083y/256667184.jpg' },
  { id: 'f7', category: 'facilities', url: 'https://i.ibb.co/wZ4b3Djy/256667187.jpg' },
  { id: 'f8', category: 'facilities', url: 'https://i.ibb.co/mrHXR2Mq/256667192.jpg' },
  { id: 'f9', category: 'facilities', url: 'https://i.ibb.co/hFVRY1y6/256667194.jpg' },
  { id: 'f10', category: 'facilities', url: 'https://i.ibb.co/W4FNx1yV/256667200.jpg' },
  { id: 'f11', category: 'facilities', url: 'https://i.ibb.co/2YCG20mH/256668167.jpg' },
  { id: 'f12', category: 'facilities', url: 'https://i.ibb.co/j9SpV3qy/256668171.jpg' },
  { id: 'f13', category: 'facilities', url: 'https://i.ibb.co/JjbXWXh1/256668175.jpg' },
  { id: 'f14', category: 'facilities', url: 'https://i.ibb.co/CKsFgNPC/256668176.jpg' },
  { id: 'f15', category: 'facilities', url: 'https://i.ibb.co/R4gMRq8d/256668179.jpg' },
  // Dining (9)
  { id: 'd1', category: 'dining', url: 'https://i.ibb.co/vpsxDnX/207411517.jpg' },
  { id: 'd2', category: 'dining', url: 'https://i.ibb.co/SW5s9xX/207411766.jpg' },
  { id: 'd3', category: 'dining', url: 'https://i.ibb.co/d4Z6mx5r/207411823.jpg' },
  { id: 'd4', category: 'dining', url: 'https://i.ibb.co/39Vz3jLh/207411921.jpg' },
  { id: 'd5', category: 'dining', url: 'https://i.ibb.co/9Hn4jjvj/207412303.jpg' },
  { id: 'd6', category: 'dining', url: 'https://i.ibb.co/DPJtjS6y/207412362.jpg' },
  { id: 'd7', category: 'dining', url: 'https://i.ibb.co/Xrs2dHqV/207412790.jpg' },
  { id: 'd8', category: 'dining', url: 'https://i.ibb.co/3yvZhy66/274814869.jpg' },
  { id: 'd9', category: 'dining', url: 'https://i.ibb.co/hF4pNK1S/274814967.jpg' },
  // Other (3)
  { id: 'o1', category: 'other', url: 'https://i.ibb.co/hFBT6yP1/205530605.jpg' },
  { id: 'o2', category: 'other', url: 'https://i.ibb.co/YFsr36mf/256668384.jpg' },
  { id: 'o3', category: 'other', url: 'https://i.ibb.co/KcfQ6PMH/256668412.jpg' },
];

export const ROOMS_DATA: Room[] = [
  {
    id: 'twin-balcony',
    title: { sq: 'Dhomë dyshe me ballkon', en: 'Twin Room with Balcony', de: 'Zweibettzimmer mit Balkon' },
    beds: { sq: '2 krevate teke', en: '2 twin beds', de: '2 Einzelbetten' },
    size: '28 m²',
    left: 2,
    maxPeople: 2,
    basePrice: 76,
    images: ['https://i.ibb.co/GQjB3YQz/56271621-2032616003698926-7527613592846204928-n-Photoroom.png', 'https://i.ibb.co/8gq9XTjH/256668391-1.jpg'],
    amenities: ['Balcony', 'Garden view', 'Mountain view', 'City view', 'Air conditioning', 'Minibar', 'Free Wifi', 'Flat-screen TV', 'Safe', 'Bathrobe', 'Netflix']
  },
  {
    id: 'double-balcony',
    title: { sq: 'Dhomë dopio me ballkon', en: 'Double Room with Balcony', de: 'Doppelzimmer mit Balkon' },
    beds: { sq: '1 krevat mbretëror', en: '1 king bed', de: '1 Kingsize-Bett' },
    size: '28 m²',
    left: 2,
    maxPeople: 2,
    basePrice: 76,
    images: ['https://i.ibb.co/CsbMzZK3/256668391.jpg', 'https://i.ibb.co/77YwSTG/256668397.jpg'],
    amenities: ['Balcony', 'Mountain view', 'Landmark view', 'Air conditioning', 'Minibar', 'Free Wifi', 'Soundproof', 'Terrace', 'Safe']
  },
  {
    id: 'suite-pool',
    title: { sq: 'Suitë me pishinë private', en: 'Suite with Private Pool', de: 'Suite mit privatem Pool' },
    beds: { sq: '1 krevat mbretëror, 1 divan', en: '1 king bed, 1 sofa bed', de: '1 Kingsize-Bett, 1 Schlafsofa' },
    size: '58 m²',
    left: 1,
    maxPeople: 2,
    basePrice: 166,
    images: ['https://i.ibb.co/FLbRvfcy/256668418-1.jpg', 'https://i.ibb.co/PsMKzR9H/256668418.jpg'],
    amenities: ['Private pool', 'Rooftop pool', 'Mountain view', 'City view', 'Air conditioning', 'Minibar', 'Free Wifi', 'Netflix']
  },
  {
    id: 'superior-apt-207',
    title: { sq: 'Apartament Superior (207m²)', en: 'Superior Apartment (207m²)', de: 'Superior Apartment (207m²)' },
    beds: { sq: '2 krevate mbretëror, 2 teke, 2 divane', en: '2 king beds, 2 twin beds, 2 sofa beds', de: '2 Kingsize-Betten, 2 Einzelbetten, 2 Schlafsofas' },
    size: '207 m²',
    left: 1,
    maxPeople: 6,
    basePrice: 191,
    images: ['https://i.ibb.co/nVpH72Z/205530606-1.jpg', 'https://i.ibb.co/21bGX6BK/205530606.jpg'],
    amenities: ['3 Bedrooms', 'Living room', 'Private bathroom', 'Free Wifi', 'Dining area', 'Kitchenette']
  },
  {
    id: 'superior-apt-164',
    title: { sq: 'Apartament Superior (164m²)', en: 'Superior Apartment (164m²)', de: 'Superior Apartment (164m²)' },
    beds: { sq: '2 krevate mbretëror, 2 teke, 2 divane', en: '2 king beds, 2 twin beds, 2 sofa beds', de: '2 Kingsize-Betten, 2 Einzelbetten, 2 Schlafsofas' },
    size: '164 m²',
    left: 1,
    maxPeople: 6,
    basePrice: 193,
    images: ['https://i.ibb.co/QjpxtSTV/205530609.jpg', 'https://i.ibb.co/VpTBSxB0/205530614-1.jpg'],
    amenities: ['3 Bedrooms', 'Living room', 'Private bathroom', 'Free Wifi', 'Dining area', 'Kitchenette']
  }
];

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/kuint_hotel?igsh=N2o1bXpxZ3o5NDB0",
  facebook: "https://www.facebook.com/share/1Dka3w4k9q/?mibextid=wwXIfr",
  tiktok: "https://www.tiktok.com/@kuinthotel?_r=1&_t=ZS-93gTvi0JKbY",
  whatsapp: "https://wa.me/38349161818",
  phone: "tel:049161818"
};

export const BOOKING_LINKS = {
  agoda: "https://www.agoda.com/kuint-hotel/hotel/all/peje-xk.html?countryId=402&finalPriceView=1&isShowMobileAppPrice=false&cid=1918349&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2026-03-1&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=EUR&isFreeOccSearch=false&los=1&searchrequestid=6f70d6e4-27f6-4e7c-aeb5-c045a3952514&ds=NcKAac6fU7eG2ws2",
  booking: "https://www.booking.com/hotel/xk/kuint.html?label=6985727c4544bf1752bdb6ce&sid=9959cfc5f6aaeb15cdb10dd61b11e3f9&aid=1188619&ucfs=1&arphpl=1&checkin=2026-03-01&checkout=2026-03-02&dest_id=900050010&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=a6ce21c0b96b00d0&srepoch=1770353315&all_sr_blocks=525905202_184951007_2_1_0&highlighted_blocks=525905202_184951007_2_1_0&matching_block_id=525905202_184951007_2_1_0&sr_pri_blocks=525905202_184951007_2_1_0__6435&from=searchresults#hotelTmpl",
  priceline: "https://www.priceline.com/relax/at/81605603/from/20260301/to/20260302/rooms/1?pclnId=CAB35650000AA782356477A36681B26DB8BC66F677574C2034D7C889BA81181C003D4B234A9275807D0F51168266E9335046D2FABBE5E4BEEC7622596739A8C5C5CA7C01A0A7C61BAEEE3385A2AE1C0D77AFCB249A8C3939BABFEEC340294825&cur=USD&qdp=61&gid=2878&cug=false&cityId=5000065539&backlink-id=f5dw551x2f5&meta-id=6fVlqJrCpdInidOjgzDj7a_PXqQKeKQBKEmRDkCrc9N7EPqIfFWu4gI8-fDUgqpE7ovOmSAanAnex4UKyCowz3Y-LDtqGNUqU8W62DsEgqOJTmsuVstqfiuLDmeAjIMpYxX3Ie-0kiY0Vd7fuBAcZ_-4jEQs7IBuvCqjqFwcAYTQeQ3Fosi0Yp24uPs33QxuE10DsI2LiYY3bTP_VTjcA2EM-ZVNDnTpX5cqnTY9Wb7qUy3ysenzq0Sc6IIX0mPqbnz9LSgmV8ANM5pmsAtxjqWfYqQZhHIEzTGeXCA8NpJWCdr_ueS-oJLWIAe5fpay&taxDisplayMode=BP"
};
