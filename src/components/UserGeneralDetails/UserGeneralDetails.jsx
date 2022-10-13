import React, { useContext } from "react";
import './userGeneralDetails.scss';
import SimpleDisplay from '../../components/SimpleDisplay/SimpleDisplay';

import { UserContext } from '../../Context/Context';

const UserGeneralDetails = () => {
    const { userContent } = useContext(UserContext)
    return (
        <div className="user-general-details">
            {
                // console.log(user)
                // console.log('<span>&#8358;</span>')
            }
            <div className="user-content-section">
                <span className="user-content-section-title">
                    Personal Information
                </span>
                <div className="user-content-section-content">
                    <SimpleDisplay title={'full Name'} value={`${userContent.profile?.firstName} ${userContent.profile?.lastName}`} />
                    <SimpleDisplay title={'Phone Number'} value={`${userContent.profile?.phoneNumber}`} />
                    <SimpleDisplay title={'Email Address'} value={`${userContent.email}`} />
                    <SimpleDisplay title={'Bvn'} value={`${userContent.profile?.bvn} `} />
                    <SimpleDisplay title={'Gender'} value={`${userContent.profile?.gender}`} />
                    {/* <SimpleDisplay title={'Marital status'} `} /> */}
                    {/* <SimpleDisplay title={'Children'}  /> */}
                    {/* <SimpleDisplay title={'Type of residence'} /> */}
                </div>
            </div>

            <div className="user-content-section">
                <span className="user-content-section-title">
                    Education and Employment
                </span>
                <div className="user-content-section-content">
                    <SimpleDisplay title={'level of education'} value={`${userContent.education?.level}`} />
                    <SimpleDisplay title={'employment status'} value={`${userContent.education?.employmentStatus}`} />
                    <SimpleDisplay title={'sector of employment'} value={`${userContent.education?.sector}`} />
                    <SimpleDisplay title={'Duration of employment'} value={`${userContent.education?.duration}`} />
                    <SimpleDisplay title={'office email'} value={`${userContent.education?.officeEmail}`} />
                    <SimpleDisplay title={'Monthly income'} value={`${userContent.profile?.currency}${userContent.education?.monthlyIncome[0]} - ${userContent.profile?.currency}${userContent.education?.monthlyIncome[1]}`} />
                    <SimpleDisplay title={'loan repayment'} value={`${userContent.education?.loanRepayment}`} />

                </div>
            </div>

            <div className="user-content-section">
                <span className="user-content-section-title">
                    Socials
                </span>
                <div className="user-content-section-content">
                    <SimpleDisplay title={'Twitter'} value={`${userContent.socials?.twitter}` } />
                    <SimpleDisplay title={'Facebook'} value={`${userContent.socials?.facebook}`} />
                    <SimpleDisplay title={'Instagram'} value={`${userContent.socials?.instagram}`} />
                </div>
            </div>

            <div className="user-content-section">
                <span className="user-content-section-title">
                    Guarantor
                </span>
                <div className="user-content-section-content">
                    <SimpleDisplay title={'full Name'} value={`${userContent.guarantor?.firstName} ${userContent.guarantor?.lastName}`} />
                    <SimpleDisplay title={'Phone Number'} value={`${userContent.guarantor?.phoneNumber}`} />
                    <SimpleDisplay title={'Address'} value={`${userContent.guarantor?.address}`} />
                    <SimpleDisplay title={'Gender'} value={`${userContent.guarantor?.gender}`} />
                </div>
            </div>
        </div>
    )
}

export default UserGeneralDetails
