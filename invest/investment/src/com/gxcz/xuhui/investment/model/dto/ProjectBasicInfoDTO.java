package com.gxcz.xuhui.investment.model.dto;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.alibaba.druid.util.StringUtils;
import com.gxcz.xuhui.investment.model.ProjectBasicInfo;

public class ProjectBasicInfoDTO extends PagerDTO{
    private String projectId;

    private String compId;

    private String folSchemeId;

    private String projectName;

    private String projectStatus;

    private BigDecimal floorArea;

    private BigDecimal structArea;

    private String plotArea;

    private BigDecimal saleStructArea;

    private String groundDate;

    private BigDecimal groundAmount;

    private String groundType;

    private String groundPosition;

    private String groundPositioning;

    private String groundPlanning;

    private BigDecimal planFold;

    private String planRent;

    private BigDecimal planIrr;

    private BigDecimal planGrossMargin;

    private BigDecimal planMoic;

    private String planStageStartDate;

    private String planStageOpenDate;

    private String planPeakeDate;

    private String planCashflowReturnDate;

    private String planDeliverDate;

    private String planCarryoverDate;

    private String planLiquidateDate;

    private String planPropertyScheme;

    private String planFinanceCalculate;

    private String corpPartnerBackground;

    private String corpContributiveRatio;

    private String corpBoardMember;

    private String corpVoteRule;

    private String restAnswerMail;

    private String restAnswerLink;

    private String restProjectManagers;

    private String restFollowerManagers;

    private String projectImages;

    private String schemeId;

    private String riskDisclaimerDes;

    private String schemeProtocol;
    
    private String projectarea;
    
    private BigDecimal buildareaprice;

    private String returndate;
    
    //项目发布开始结束时间
    private String releaseStartDate="";
    private String releaseEndDate="";
    private String companyName;//公司
    private Date subscribeStartDate=null;//付款开始时间:
    private Date subscribeEndDate=null;//付款结束时间:
    private Date payStartDate;//认购开始时间:
    private Date payEndDate; //认购结束时间:
    private String userid; //用户id
    private BigDecimal personAmt; 
    private BigDecimal yxpersonAmt;
    private BigDecimal jtpersonAmt;
    private String img;//项目的主图片
    private String img1;//项目的其他图片
    private String img2;//项目的其他图片
    private String img3;//项目的其他图片
    private String type;
    private String searchName="";
    private String filiableName="";//用户所属区域(分公司)
    private String isperson;//是否查个人中心项目
    private String isPurchase;//认购申请表里面的项目id 用来判断是不是现实 我已认购按钮  如果有值表示已经认购
    private String uname;//用户的名字 用来查询强制跟投人员的
    private BigDecimal compForceAmount;//城市公司强投包总额 
    private BigDecimal groupForceAmount;//集团强投包总额
    private BigDecimal compChoiceAmount;//选投包总额(无杠杆)
    private BigDecimal followAmount;//跟投总额(含杠杆)
    private BigDecimal subscribeAmt;//已认购总额(含杠杆)
    
    
    
    
	 
    
	public BigDecimal getSubscribeAmt() {
		return subscribeAmt;
	}

	public void setSubscribeAmt(BigDecimal subscribeAmt) {
		this.subscribeAmt = subscribeAmt;
	}

	public BigDecimal getCompForceAmount() {
		return compForceAmount;
	}

	public void setCompForceAmount(BigDecimal compForceAmount) {
		this.compForceAmount = compForceAmount;
	}

	public BigDecimal getGroupForceAmount() {
		return groupForceAmount;
	}

	public void setGroupForceAmount(BigDecimal groupForceAmount) {
		this.groupForceAmount = groupForceAmount;
	}

	public BigDecimal getCompChoiceAmount() {
		return compChoiceAmount;
	}

	public void setCompChoiceAmount(BigDecimal compChoiceAmount) {
		this.compChoiceAmount = compChoiceAmount;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getIsPurchase() {
		return isPurchase;
	}

	public void setIsPurchase(String isPurchase) {
		this.isPurchase = isPurchase;
	}

	public String getIsperson() {
		return isperson;
	}

	public void setIsperson(String isperson) {
		this.isperson = isperson;
	}

	public String getFiliableName() {
		return filiableName;
	}

	public void setFiliableName(String filiableName) {
		this.filiableName = filiableName;
	}

	public String getProjectarea() {
		return projectarea;
	}

	public void setProjectarea(String projectarea) {
		this.projectarea = projectarea;
	}

	public String getSearchName() {
		return searchName;
	}

	public void setSearchName(String searchName) {
		this.searchName = searchName;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getImg1() {
		return img1;
	}

	public void setImg1(String img1) {
		this.img1 = img1;
	}

	public String getImg2() {
		return img2;
	}

	public void setImg2(String img2) {
		this.img2 = img2;
	}

	public String getImg3() {
		return img3;
	}

	public void setImg3(String img3) {
		this.img3 = img3;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public BigDecimal getPersonAmt() {
		return personAmt;
	}

	public void setPersonAmt(BigDecimal personAmt) {
		this.personAmt = personAmt;
	}

	public BigDecimal getYxpersonAmt() {
		return yxpersonAmt;
	}

	public void setYxpersonAmt(BigDecimal yxpersonAmt) {
		this.yxpersonAmt = yxpersonAmt;
	}

	public BigDecimal getJtpersonAmt() {
		return jtpersonAmt;
	}

	public void setJtpersonAmt(BigDecimal jtpersonAmt) {
		this.jtpersonAmt = jtpersonAmt;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public Date getSubscribeStartDate() {
		return subscribeStartDate;
	}

	public void setSubscribeStartDate(Date subscribeStartDate) {
		this.subscribeStartDate = subscribeStartDate;
	}

	public Date getSubscribeEndDate() {
		return subscribeEndDate;
	}

	public void setSubscribeEndDate(Date subscribeEndDate) {
		this.subscribeEndDate = subscribeEndDate;
	}

	public Date getPayStartDate() {
		return payStartDate;
	}

	public void setPayStartDate(Date payStartDate) {
		this.payStartDate = payStartDate;
	}

	public Date getPayEndDate() {
		return payEndDate;
	}

	public void setPayEndDate(Date payEndDate) {
		this.payEndDate = payEndDate;
	}

	public BigDecimal getFollowAmount() {
		return followAmount;
	}

	public void setFollowAmount(BigDecimal followAmount) {
		this.followAmount = followAmount;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getReleaseStartDate() {
		return releaseStartDate;
	}

	public void setReleaseStartDate(String releaseStartDate) {
		this.releaseStartDate = releaseStartDate;
	}

	public String getReleaseEndDate() {
		return releaseEndDate;
	}

	public void setReleaseEndDate(String releaseEndDate) {
		this.releaseEndDate = releaseEndDate;
	}

	public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId == null ? null : projectId.trim();
    }

    public String getCompId() {
        return compId;
    }

    public void setCompId(String compId) {
        this.compId = compId == null ? null : compId.trim();
    }

    public String getFolSchemeId() {
        return folSchemeId;
    }

    public void setFolSchemeId(String folSchemeId) {
        this.folSchemeId = folSchemeId == null ? null : folSchemeId.trim();
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName == null ? null : projectName.trim();
    }

    public String getProjectStatus() {
        return projectStatus;
    }

    public void setProjectStatus(String projectStatus) {
        this.projectStatus = projectStatus == null ? null : projectStatus.trim();
    }

    public BigDecimal getFloorArea() {
        return floorArea;
    }

    public void setFloorArea(BigDecimal floorArea) {
        this.floorArea = floorArea;
    }

    public BigDecimal getStructArea() {
        return structArea;
    }

    public void setStructArea(BigDecimal structArea) {
        this.structArea = structArea;
    }

    public String getPlotArea() {
        return plotArea;
    }

    public void setPlotArea(String plotArea) {
        this.plotArea = plotArea;
    }

    public BigDecimal getSaleStructArea() {
        return saleStructArea;
    }

    public void setSaleStructArea(BigDecimal saleStructArea) {
        this.saleStructArea = saleStructArea;
    }

    public String getGroundDate() {
        return groundDate;
    }

    public void setGroundDate(String groundDate) {
        this.groundDate = groundDate;
    }

    public BigDecimal getGroundAmount() {
        return groundAmount;
    }

    public void setGroundAmount(BigDecimal groundAmount) {
        this.groundAmount = groundAmount;
    }

    public String getGroundType() {
        return groundType;
    }

    public void setGroundType(String groundType) {
        this.groundType = groundType == null ? null : groundType.trim();
    }

    public String getGroundPosition() {
        return groundPosition;
    }

    public void setGroundPosition(String groundPosition) {
        this.groundPosition = groundPosition == null ? null : groundPosition.trim();
    }

    public String getGroundPositioning() {
        return groundPositioning;
    }

    public void setGroundPositioning(String groundPositioning) {
        this.groundPositioning = groundPositioning == null ? null : groundPositioning.trim();
    }

    public String getGroundPlanning() {
        return groundPlanning;
    }

    public void setGroundPlanning(String groundPlanning) {
        this.groundPlanning = groundPlanning == null ? null : groundPlanning.trim();
    }

    public BigDecimal getPlanFold() {
        return planFold;
    }

    public void setPlanFold(BigDecimal planFold) {
        this.planFold = planFold;
    }

    public String getPlanRent() {
        return planRent;
    }

    public void setPlanRent(String planRent) {
        this.planRent = planRent == null ? null : planRent.trim();
    }

    public BigDecimal getPlanIrr() {
        return planIrr;
    }

    public void setPlanIrr(BigDecimal planIrr) {
        this.planIrr = planIrr;
    }

    public BigDecimal getPlanGrossMargin() {
        return planGrossMargin;
    }

    public void setPlanGrossMargin(BigDecimal planGrossMargin) {
        this.planGrossMargin = planGrossMargin;
    }

    public BigDecimal getPlanMoic() {
        return planMoic;
    }

    public void setPlanMoic(BigDecimal planMoic) {
        this.planMoic = planMoic;
    }

    public String getPlanStageStartDate() {
        return planStageStartDate;
    }

    public void setPlanStageStartDate(String planStageStartDate) {
        this.planStageStartDate = planStageStartDate;
    }

    public String getPlanStageOpenDate() {
        return planStageOpenDate;
    }

    public void setPlanStageOpenDate(String planStageOpenDate) {
        this.planStageOpenDate = planStageOpenDate;
    }

    public String getPlanPeakeDate() {
        return planPeakeDate;
    }

    public void setPlanPeakeDate(String planPeakeDate) {
        this.planPeakeDate = planPeakeDate;
    }

    public String getPlanCashflowReturnDate() {
        return planCashflowReturnDate;
    }

    public void setPlanCashflowReturnDate(String planCashflowReturnDate) {
        this.planCashflowReturnDate = planCashflowReturnDate;
    }

    public String getPlanDeliverDate() {
        return planDeliverDate;
    }

    public void setPlanDeliverDate(String planDeliverDate) {
        this.planDeliverDate = planDeliverDate;
    }

    public String getPlanCarryoverDate() {
        return planCarryoverDate;
    }

    public void setPlanCarryoverDate(String planCarryoverDate) {
        this.planCarryoverDate = planCarryoverDate;
    }

    public String getPlanLiquidateDate() {
        return planLiquidateDate;
    }

    public void setPlanLiquidateDate(String planLiquidateDate) {
        this.planLiquidateDate = planLiquidateDate;
    }

    public String getPlanPropertyScheme() {
        return planPropertyScheme;
    }

    public void setPlanPropertyScheme(String planPropertyScheme) {
        this.planPropertyScheme = planPropertyScheme == null ? null : planPropertyScheme.trim();
    }

    public String getPlanFinanceCalculate() {
        return planFinanceCalculate;
    }

    public void setPlanFinanceCalculate(String planFinanceCalculate) {
        this.planFinanceCalculate = planFinanceCalculate == null ? null : planFinanceCalculate.trim();
    }

    public String getCorpPartnerBackground() {
        return corpPartnerBackground;
    }

    public void setCorpPartnerBackground(String corpPartnerBackground) {
        this.corpPartnerBackground = corpPartnerBackground == null ? null : corpPartnerBackground.trim();
    }

    public String getCorpContributiveRatio() {
        return corpContributiveRatio;
    }

    public void setCorpContributiveRatio(String corpContributiveRatio) {
        this.corpContributiveRatio = corpContributiveRatio;
    }

    public String getCorpBoardMember() {
        return corpBoardMember;
    }

    public void setCorpBoardMember(String corpBoardMember) {
        this.corpBoardMember = corpBoardMember == null ? null : corpBoardMember.trim();
    }

    public String getCorpVoteRule() {
        return corpVoteRule;
    }

    public void setCorpVoteRule(String corpVoteRule) {
        this.corpVoteRule = corpVoteRule == null ? null : corpVoteRule.trim();
    }

    public String getRestAnswerMail() {
        return restAnswerMail;
    }

    public void setRestAnswerMail(String restAnswerMail) {
        this.restAnswerMail = restAnswerMail == null ? null : restAnswerMail.trim();
    }

    public String getRestAnswerLink() {
        return restAnswerLink;
    }

    public void setRestAnswerLink(String restAnswerLink) {
        this.restAnswerLink = restAnswerLink == null ? null : restAnswerLink.trim();
    }

    public String getRestProjectManagers() {
        return restProjectManagers;
    }

    public void setRestProjectManagers(String restProjectManagers) {
        this.restProjectManagers = restProjectManagers == null ? null : restProjectManagers.trim();
    }

    public String getRestFollowerManagers() {
        return restFollowerManagers;
    }

    public void setRestFollowerManagers(String restFollowerManagers) {
        this.restFollowerManagers = restFollowerManagers == null ? null : restFollowerManagers.trim();
    }

    public String getProjectImages() {
        return projectImages;
    }

    public void setProjectImages(String projectImages) {
        this.projectImages = projectImages == null ? null : projectImages.trim();
    }

    public String getSchemeId() {
        return schemeId;
    }

    public void setSchemeId(String schemeId) {
        this.schemeId = schemeId == null ? null : schemeId.trim();
    }

    public String getRiskDisclaimerDes() {
        return riskDisclaimerDes;
    }

    public void setRiskDisclaimerDes(String riskDisclaimerDes) {
        this.riskDisclaimerDes = riskDisclaimerDes == null ? null : riskDisclaimerDes.trim();
    }

    public String getSchemeProtocol() {
        return schemeProtocol;
    }

    public void setSchemeProtocol(String schemeProtocol) {
        this.schemeProtocol = schemeProtocol == null ? null : schemeProtocol.trim();
    }
    
    public BigDecimal getBuildareaprice() {
		return buildareaprice;
	}

	public void setBuildareaprice(BigDecimal buildareaprice) {
		this.buildareaprice = buildareaprice;
	}

	public String getReturndate() {
		return returndate;
	}

	public void setReturndate(String returndate) {
		this.returndate = returndate;
	}

	public ProjectBasicInfo toModelVO(ProjectBasicInfoDTO projectDto) throws ParseException{
    	SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    	Date groundDate=null;
    	Date planStageStartDate=null;
	    Date planStageOpenDate=null;
	    Date planPeakeDate=null;
	    Date planCashflowReturnDate=null;
	    Date planDeliverDate=null;
	    Date planCarryoverDate=null;
	    Date planLiquidateDate=null;
    	if(!StringUtils.isEmpty(projectDto.getGroundDate())) 
    		groundDate=sdf.parse(projectDto.getGroundDate());
    	if(!StringUtils.isEmpty(projectDto.getPlanStageStartDate())) 
    		planStageStartDate=sdf.parse(projectDto.getPlanStageStartDate());
    	if(!StringUtils.isEmpty(projectDto.getPlanStageOpenDate())) 
    		planStageOpenDate=sdf.parse(projectDto.getPlanStageOpenDate());
    	if(!StringUtils.isEmpty(projectDto.getPlanPeakeDate())) 
    		planPeakeDate=sdf.parse(projectDto.getPlanPeakeDate());
    	if(!StringUtils.isEmpty(projectDto.getPlanCashflowReturnDate())) 
    		planCashflowReturnDate=sdf.parse(projectDto.getPlanCashflowReturnDate());
    	if(!StringUtils.isEmpty(projectDto.getPlanDeliverDate())) 
    		planDeliverDate=sdf.parse(projectDto.getPlanDeliverDate());
    	if(!StringUtils.isEmpty(projectDto.getPlanCarryoverDate())) 
    		planCarryoverDate=sdf.parse(projectDto.getPlanCarryoverDate());
    	if(!StringUtils.isEmpty(projectDto.getPlanLiquidateDate())) 
    		planLiquidateDate=sdf.parse(projectDto.getPlanLiquidateDate());
    	ProjectBasicInfo projectBasicInfo = new ProjectBasicInfo(projectDto.getProjectId(),
    			projectDto.getCompId(),projectDto.getProjectName(),
    			projectDto.getProjectStatus(),projectDto.getFloorArea(),
    			projectDto.getStructArea(),projectDto.getPlotArea(),
    			projectDto.getSaleStructArea(),groundDate,projectDto.getGroundAmount(),
    			projectDto.getGroundType(),projectDto.getGroundPosition(),
    			projectDto.getGroundPositioning(),projectDto.getGroundPlanning(),
    			projectDto.getPlanFold(),projectDto.getPlanRent(),
    			projectDto.getPlanIrr(),projectDto.getPlanGrossMargin(),
    			projectDto.getPlanMoic(),planStageStartDate,
    			planStageOpenDate,planPeakeDate,planCashflowReturnDate,
    			planDeliverDate,planCarryoverDate,planLiquidateDate,
    			projectDto.getPlanPropertyScheme(),projectDto.getPlanFinanceCalculate(),
    			projectDto.getCorpPartnerBackground(),projectDto.getCorpContributiveRatio(),
    			projectDto.getCorpBoardMember(),projectDto.getCorpVoteRule(),
    			projectDto.getRestAnswerMail(),projectDto.getRestAnswerLink(),
    			projectDto.getRestProjectManagers(),projectDto.getRestFollowerManagers(),
    			projectDto.getProjectImages(),projectDto.getFolSchemeId(),projectDto.getRiskDisclaimerDes(),
    			projectDto.getSchemeProtocol(),projectDto.getProjectarea(),projectDto.getReturndate(),
    			projectDto.getBuildareaprice());
    	return projectBasicInfo;
    }
}