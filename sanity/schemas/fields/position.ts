const positionTitle = {
  name: 'title',
  title: 'Title',
  type: 'blockContent',
};
const positionLocation = {
  ...positionTitle,
  title: 'Location',
  name: 'positionLocation',
};
const positionId = {
  ...positionLocation,
  title: 'Id',
  name: 'positionId',
};
const positionDesc = {
  ...positionId,
  title: 'Description',
  name: 'positionDescription',
};
const positionDetail = {
  ...positionDesc,
  title: 'Detail',
  name: 'positionDetail',
};
export {positionTitle, positionLocation, positionId, positionDesc, positionDetail};
