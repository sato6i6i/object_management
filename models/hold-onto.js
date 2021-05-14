import { DataTypes } from 'sequelize'
import sequelize from './db'


const HoldOnto = sequelize.define('hold_onto',{
  productName:    { type: DataTypes.STRING, field: 'product_name', defaultValue: null,},
  serialCode:     { type: DataTypes.STRING, field: 'serial_code', defaultValue: null,},
  customerStaff:  { type: DataTypes.INTEGER, field: 'customer_staff', defaultValue: null,},
  getDate:        { type: DataTypes.DATEONLY, field: 'get_date', defaultValue: null,},
  getStaff:       { type: DataTypes.STRING, field: 'get_staff', defaultValue: null,},
  storagePeriod:  { type: DataTypes.DATEONLY, field: 'storage_period', defaultValue: null,},
  storagePlace:   { type: DataTypes.STRING, field: 'storage_place', defaultValue: null,},
  payoutDate:     { type: DataTypes.DATEONLY, field: 'payout_date', defaultValue: null,},
  payoutStaff:    { type: DataTypes.STRING, field: 'payout_staff', defaultValue: null,},
  projectTitle:   { type: DataTypes.STRING, field: 'project_title', defaultValue: null,},
  status:         { type: DataTypes.STRING, field: 'status', defaultValue: null,},
  createdAt:      { type: DataTypes.DATE, field: 'created_at', defaultValue: null,},
  updatedAt:      { type: DataTypes.DATE, field: 'updated_at', defaultValue: null,},
},{

});

export default HoldOnto