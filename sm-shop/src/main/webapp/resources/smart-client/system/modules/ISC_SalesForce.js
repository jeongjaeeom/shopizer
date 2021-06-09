/*
 * Isomorphic SmartClient
 * Version v8.2p_2012-06-03 (2012-06-03)
 * Copyright(c) 1998 and beyond Isomorphic Software, Inc. All rights reserved.
 * "SmartClient" is a trademark of Isomorphic Software, Inc.
 *
 * licensing@smartclient.com
 *
 * http://smartclient.com/license
 */

if (window.isc && window.isc.module_Core && !window.isc.module_SalesForce) {
  isc.module_SalesForce = 1;
  isc._moduleStart = isc._SalesForce_start = (isc.timestamp ? isc.timestamp()
      : new Date().getTime());
  if (isc._moduleEnd && (!isc.Log || (isc.Log && isc.Log.logIsDebugEnabled(
      'loadTime')))) {
    isc._pTM = {
      message: 'SalesForce load/parse time: ' + (isc._moduleStart
          - isc._moduleEnd) + 'ms', category: 'loadTime'
    };
    if (isc.Log && isc.Log.logDebug) {
      isc.Log.logDebug(isc._pTM.message,
          'loadTime')
    } else if (isc._preLog) {
      isc._preLog[isc._preLog.length] = isc._pTM
    } else {
      isc._preLog = [isc._pTM]
    }
  }
  isc.definingFramework = true;
  isc.SchemaSet.create({
    qualifyAll: true,
    schemaNamespace: "urn:sobject.partner.soap.sforce.com",
    serviceNamespace: "urn:partner.soap.sforce.com",
    schemaImports: [
      {
        location: "",
        namespace: "urn:partner.soap.sforce.com"
      }
    ],
    schema: [
      isc.XSComplexType.create({
        ID: "sObject",
        mustQualify: true,
        xsdAnyElement: true,
        fields: [
          {
            name: "type",
            type: "string",
            xmlRequired: true
          },
          {
            name: "fieldsToNull",
            nillable: "true",
            type: "string",
            xmlRequired: false
          },
          {
            name: "Id",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          }
        ]
      })
    ]
  })
  isc.SchemaSet.create({
    qualifyAll: true,
    schemaNamespace: "urn:partner.soap.sforce.com",
    serviceNamespace: "urn:partner.soap.sforce.com",
    schemaImports: [
      {
        location: "",
        namespace: "urn:sobject.partner.soap.sforce.com"
      }
    ],
    schema: [
      isc.XSElement.create({
        ID: "login",
        mustQualify: true,
        fields: [
          {
            name: "username",
            type: "string",
            xmlRequired: true
          },
          {
            name: "password",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "loginResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "LoginResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "describeSObject",
        mustQualify: true,
        fields: [
          {
            name: "sObjectType",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "describeSObjectResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            nillable: "true",
            type: "DescribeSObjectResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "describeSObjects",
        mustQualify: true,
        fields: [
          {
            name: "sObjectType",
            type: "string",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "describeSObjectsResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            nillable: "true",
            type: "DescribeSObjectResult",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "describeGlobal",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "describeGlobalResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "DescribeGlobalResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "describeLayout",
        mustQualify: true,
        fields: [
          {
            name: "sObjectType",
            type: "string",
            xmlRequired: true
          },
          {
            name: "recordTypeIds",
            type: "ID",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "describeLayoutResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            nillable: "true",
            type: "DescribeLayoutResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "describeSoftphoneLayout",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "describeSoftphoneLayoutResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            nillable: "true",
            type: "DescribeSoftphoneLayoutResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "describeTabs",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "describeTabsResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            nillable: "true",
            type: "DescribeTabSetResult",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "create",
        mustQualify: true,
        fields: [
          {
            name: "sObjects",
            type: "sObject",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "createResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "SaveResult",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "update",
        mustQualify: true,
        fields: [
          {
            name: "sObjects",
            type: "sObject",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "updateResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "SaveResult",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "upsert",
        mustQualify: true,
        fields: [
          {
            name: "externalIDFieldName",
            type: "string",
            xmlRequired: true
          },
          {
            name: "sObjects",
            type: "sObject",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "upsertResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "UpsertResult",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "merge",
        mustQualify: true,
        fields: [
          {
            name: "request",
            type: "MergeRequest",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "mergeResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "MergeResult",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "delete",
        mustQualify: true,
        fields: [
          {
            name: "ids",
            type: "ID",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "deleteResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "DeleteResult",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "undelete",
        mustQualify: true,
        fields: [
          {
            name: "ids",
            type: "ID",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "undeleteResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "UndeleteResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "process",
        mustQualify: true,
        fields: [
          {
            name: "actions",
            type: "ProcessRequest",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "processResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "ProcessResult",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "retrieve",
        mustQualify: true,
        fields: [
          {
            name: "fieldList",
            type: "string",
            xmlRequired: true
          },
          {
            name: "sObjectType",
            type: "string",
            xmlRequired: true
          },
          {
            name: "ids",
            type: "ID",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "retrieveResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            nillable: "true",
            type: "sObject",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "convertLead",
        mustQualify: true,
        fields: [
          {
            name: "leadConverts",
            type: "LeadConvert",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "convertLeadResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "LeadConvertResult",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "getUpdated",
        mustQualify: true,
        fields: [
          {
            name: "sObjectType",
            type: "string",
            xmlRequired: true
          },
          {
            name: "startDate",
            type: "dateTime",
            xmlRequired: true
          },
          {
            name: "endDate",
            type: "dateTime",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "getUpdatedResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "GetUpdatedResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "getDeleted",
        mustQualify: true,
        fields: [
          {
            name: "sObjectType",
            type: "string",
            xmlRequired: true
          },
          {
            name: "startDate",
            type: "dateTime",
            xmlRequired: true
          },
          {
            name: "endDate",
            type: "dateTime",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "getDeletedResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "GetDeletedResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "query",
        mustQualify: true,
        fields: [
          {
            name: "queryString",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "queryResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "QueryResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "queryAll",
        mustQualify: true,
        fields: [
          {
            name: "queryString",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "queryAllResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "QueryResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "queryMore",
        mustQualify: true,
        fields: [
          {
            name: "queryLocator",
            type: "QueryLocator",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "queryMoreResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "QueryResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "search",
        mustQualify: true,
        fields: [
          {
            name: "searchString",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "searchResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "SearchResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "getServerTimestamp",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "getServerTimestampResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "GetServerTimestampResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "setPassword",
        mustQualify: true,
        fields: [
          {
            name: "userId",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "password",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "setPasswordResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "SetPasswordResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "resetPassword",
        mustQualify: true,
        fields: [
          {
            name: "userId",
            type: "ID",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "resetPasswordResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "ResetPasswordResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "getUserInfo",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "getUserInfoResponse",
        mustQualify: true,
        fields: [
          {
            name: "result",
            type: "GetUserInfoResult",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "SessionHeader",
        mustQualify: true,
        fields: [
          {
            name: "sessionId",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "LoginScopeHeader",
        mustQualify: true,
        fields: [
          {
            name: "organizationId",
            type: "ID",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "CallOptions",
        mustQualify: true,
        fields: [
          {
            name: "client",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "QueryOptions",
        mustQualify: true,
        fields: [
          {
            name: "batchSize",
            type: "int",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "MruHeader",
        mustQualify: true,
        fields: [
          {
            name: "updateMru",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "EmailHeader",
        mustQualify: true,
        fields: [
          {
            name: "triggerAutoResponseEmail",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "triggerOtherEmail",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "triggerUserEmail",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "AssignmentRuleHeader",
        mustQualify: true,
        fields: [
          {
            name: "assignmentRuleId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "useDefaultRule",
            nillable: "true",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "UserTerritoryDeleteHeader",
        mustQualify: true,
        fields: [
          {
            name: "transferToUserId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.SimpleType.create({
        inheritsFrom: "string",
        name: "ID",
        xmlNonEmpty: true,
        xmlSource: "SimpleType",
        validators: [
          {
            max: 18.0,
            min: 18.0,
            type: "lengthRange"
          },
          {
            expression: "[a-zA-Z0-9]{18}",
            type: "regexp"
          }
        ]
      })
      ,
      isc.SimpleType.create({
        inheritsFrom: "string",
        name: "QueryLocator",
        xmlSource: "SimpleType"
      })
      ,
      isc.XSComplexType.create({
        ID: "QueryResult",
        mustQualify: true,
        fields: [
          {
            name: "done",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "queryLocator",
            nillable: "true",
            type: "QueryLocator",
            xmlRequired: true
          },
          {
            name: "records",
            nillable: "true",
            type: "sObject",
            xmlRequired: false
          },
          {
            name: "size",
            type: "int",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "SearchResult",
        mustQualify: true,
        fields: [
          {
            name: "searchRecords",
            type: "SearchRecord",
            xmlRequired: false
          },
          {
            name: "sforceReserved",
            type: "string",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "SearchRecord",
        mustQualify: true,
        fields: [
          {
            name: "record",
            type: "sObject",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "GetUpdatedResult",
        mustQualify: true,
        fields: [
          {
            name: "ids",
            type: "ID",
            xmlRequired: false
          },
          {
            name: "latestDateCovered",
            type: "dateTime",
            xmlRequired: true
          },
          {
            name: "sforceReserved",
            type: "string",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "GetDeletedResult",
        mustQualify: true,
        fields: [
          {
            name: "deletedRecords",
            type: "DeletedRecord",
            xmlRequired: false
          },
          {
            name: "earliestDateAvailable",
            type: "dateTime",
            xmlRequired: true
          },
          {
            name: "latestDateCovered",
            type: "dateTime",
            xmlRequired: true
          },
          {
            name: "sforceReserved",
            type: "string",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DeletedRecord",
        mustQualify: true,
        fields: [
          {
            name: "deletedDate",
            type: "dateTime",
            xmlRequired: true
          },
          {
            name: "id",
            type: "ID",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "GetServerTimestampResult",
        mustQualify: true,
        fields: [
          {
            name: "timestamp",
            type: "dateTime",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "SetPasswordResult",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSComplexType.create({
        ID: "ResetPasswordResult",
        mustQualify: true,
        fields: [
          {
            name: "password",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "GetUserInfoResult",
        mustQualify: true,
        fields: [
          {
            name: "accessibilityMode",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "currencySymbol",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "licenseType",
            type: "string",
            xmlRequired: true
          },
          {
            name: "organizationId",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "organizationMultiCurrency",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "organizationName",
            type: "string",
            xmlRequired: true
          },
          {
            name: "profileId",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "roleId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "userDefaultCurrencyIsoCode",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "userEmail",
            type: "string",
            xmlRequired: true
          },
          {
            name: "userFullName",
            type: "string",
            xmlRequired: true
          },
          {
            name: "userId",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "userLanguage",
            type: "string",
            xmlRequired: true
          },
          {
            name: "userLocale",
            type: "string",
            xmlRequired: true
          },
          {
            name: "userName",
            type: "string",
            xmlRequired: true
          },
          {
            name: "userTimeZone",
            type: "string",
            xmlRequired: true
          },
          {
            name: "userUiSkin",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "LoginResult",
        mustQualify: true,
        fields: [
          {
            name: "passwordExpired",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "serverUrl",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "sessionId",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "userId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "userInfo",
            type: "GetUserInfoResult",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.SimpleType.create({
        inheritsFrom: "string",
        name: "StatusCode",
        xmlSource: "SimpleType",
        valueMap: [
          "ALREADY_IN_PROCESS",
          "ASSIGNEE_TYPE_REQUIRED",
          "BAD_CUSTOM_ENTITY_PARENT_DOMAIN",
          "CANNOT_CASCADE_PRODUCT_ACTIVE",
          "CANNOT_CREATE_ANOTHER_MANAGED_PACKAGE",
          "CANNOT_DEACTIVATE_DIVISION",
          "CANNOT_DELETE_MANAGED_OBJECT",
          "CANNOT_DISABLE_LAST_ADMIN",
          "CANNOT_ENABLE_IP_RESTRICT_REQUESTS",
          "CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY",
          "CANNOT_MODIFY_MANAGED_OBJECT",
          "CANNOT_REPARENT_RECORD",
          "CANNOT_RESOLVE_NAME",
          "CANNOT_UPDATE_CONVERTED_LEAD",
          "CANT_DISABLE_CORP_CURRENCY",
          "CANT_UNSET_CORP_CURRENCY",
          "CHILD_SHARE_FAILS_PARENT",
          "CIRCULAR_DEPENDENCY",
          "CUSTOM_CLOB_FIELD_LIMIT_EXCEEDED",
          "CUSTOM_ENTITY_OR_FIELD_LIMIT",
          "CUSTOM_FIELD_INDEX_LIMIT_EXCEEDED",
          "CUSTOM_INDEX_EXISTS",
          "CUSTOM_LINK_LIMIT_EXCEEDED",
          "CUSTOM_TAB_LIMIT_EXCEEDED",
          "DELETE_FAILED",
          "DELETE_REQUIRED_ON_CASCADE",
          "DEPENDENCY_EXISTS",
          "DUPLICATE_CASE_SOLUTION",
          "DUPLICATE_CUSTOM_ENTITY_DEFINITION",
          "DUPLICATE_CUSTOM_TAB_MOTIF",
          "DUPLICATE_DEVELOPER_NAME",
          "DUPLICATE_EXTERNAL_ID",
          "DUPLICATE_MASTER_LABEL",
          "DUPLICATE_USERNAME",
          "DUPLICATE_VALUE",
          "EMPTY_SCONTROL_FILE_NAME",
          "ENTITY_FAILED_IFLASTMODIFIED_ON_UPDATE",
          "ENTITY_IS_ARCHIVED",
          "ENTITY_IS_DELETED",
          "ENTITY_IS_LOCKED",
          "FAILED_ACTIVATION",
          "FIELD_CUSTOM_VALIDATION_EXCEPTION",
          "FIELD_INTEGRITY_EXCEPTION",
          "IMAGE_TOO_LARGE",
          "INACTIVE_OWNER_OR_USER",
          "INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY",
          "INSUFFICIENT_ACCESS_OR_READONLY",
          "INVALID_ACCESS_LEVEL",
          "INVALID_ARGUMENT_TYPE",
          "INVALID_ASSIGNEE_TYPE",
          "INVALID_ASSIGNMENT_RULE",
          "INVALID_BATCH_OPERATION",
          "INVALID_CREDIT_CARD_INFO",
          "INVALID_CROSS_REFERENCE_KEY",
          "INVALID_CROSS_REFERENCE_TYPE_FOR_FIELD",
          "INVALID_CURRENCY_CONV_RATE",
          "INVALID_CURRENCY_ISO",
          "INVALID_EMAIL_ADDRESS",
          "INVALID_EMPTY_KEY_OWNER",
          "INVALID_FIELD",
          "INVALID_FIELD_FOR_INSERT_UPDATE",
          "INVALID_FILTER_ACTION",
          "INVALID_ID_FIELD",
          "INVALID_INET_ADDRESS",
          "INVALID_LINEITEM_CLONE_STATE",
          "INVALID_MASTER_OR_TRANSLATED_SOLUTION",
          "INVALID_OPERATION",
          "INVALID_OPERATOR",
          "INVALID_OR_NULL_FOR_RESTRICTED_PICKLIST",
          "INVALID_PERSON_ACCOUNT_OPERATION",
          "INVALID_STATUS",
          "INVALID_TYPE",
          "INVALID_TYPE_FOR_OPERATION",
          "INVALID_TYPE_ON_FIELD_IN_RECORD",
          "IP_RANGE_LIMIT_EXCEEDED",
          "LAST_MODIFIED_SINCE_TOO_OLD",
          "LICENSE_LIMIT_EXCEEDED",
          "LIMIT_EXCEEDED",
          "MALFORMED_ID",
          "MANAGER_NOT_DEFINED",
          "MAXIMUM_CCEMAILS_EXCEEDED",
          "MAXIMUM_DASHBOARD_COMPONENTS_EXCEEDED",
          "MAXIMUM_SIZE_OF_ATTACHMENT",
          "MAXIMUM_SIZE_OF_DOCUMENT",
          "MAX_ACTIONS_PER_RULE_EXCEEDED",
          "MAX_ACTIVE_RULES_EXCEEDED",
          "MAX_APPROVAL_STEPS_EXCEEDED",
          "MAX_RULES_EXCEEDED",
          "MAX_RULE_ENTRIES_EXCEEDED",
          "MAX_TASK_DESCRIPTION_EXCEEEDED",
          "MAX_TM_RULES_EXCEEDED",
          "MAX_TM_RULE_ITEMS_EXCEEDED",
          "MISSING_ARGUMENT",
          "NONUNIQUE_SHIPPING_ADDRESS",
          "NO_APPLICABLE_PROCESS",
          "NUMBER_OUTSIDE_VALID_RANGE",
          "NUM_HISTORY_FIELDS_BY_SOBJECT_EXCEEDED",
          "PRIVATE_CONTACT_ON_ASSET",
          "REQUIRED_FIELD_MISSING",
          "SHARE_NEEDED_FOR_CHILD_OWNER",
          "STANDARD_PRICE_NOT_DEFINED",
          "STORAGE_LIMIT_EXCEEDED",
          "TABSET_LIMIT_EXCEEDED",
          "TERRITORY_REALIGN_IN_PROGRESS",
          "TEXT_DATA_OUTSIDE_SUPPORTED_CHARSET",
          "TOO_MANY_ENUM_VALUE",
          "TRANSFER_REQUIRES_READ",
          "UNAVAILABLE_RECORDTYPE_EXCEPTION",
          "UNDELETE_FAILED",
          "UNKNOWN_EXCEPTION",
          "UNSPECIFIED_EMAIL_ADDRESS"
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "Error",
        mustQualify: true,
        fields: [
          {
            name: "fields",
            nillable: "true",
            type: "string",
            xmlRequired: false
          },
          {
            name: "message",
            type: "string",
            xmlRequired: true
          },
          {
            name: "statusCode",
            type: "StatusCode",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "SaveResult",
        mustQualify: true,
        fields: [
          {
            name: "errors",
            type: "Error",
            xmlRequired: false
          },
          {
            name: "id",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "success",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "UpsertResult",
        mustQualify: true,
        fields: [
          {
            name: "created",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "errors",
            type: "Error",
            xmlRequired: false
          },
          {
            name: "id",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "success",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "MergeRequest",
        mustQualify: true,
        fields: [
          {
            name: "masterRecord",
            type: "sObject",
            xmlRequired: true
          },
          {
            name: "recordToMergeIds",
            type: "ID",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "MergeResult",
        mustQualify: true,
        fields: [
          {
            name: "errors",
            type: "Error",
            xmlRequired: false
          },
          {
            name: "id",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "mergedRecordIds",
            type: "ID",
            xmlRequired: false
          },
          {
            name: "success",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "updatedRelatedIds",
            type: "ID",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "ProcessRequest",
        mustQualify: true,
        fields: [
          {
            name: "comments",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "nextApproverIds",
            nillable: "true",
            type: "ID",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "ProcessSubmitRequest",
        inheritsFrom: "ProcessRequest",
        mustQualify: true,
        useParentFieldOrder: true,
        fields: [
          {
            name: "objectId",
            type: "ID",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "ProcessWorkitemRequest",
        inheritsFrom: "ProcessRequest",
        mustQualify: true,
        useParentFieldOrder: true,
        fields: [
          {
            name: "action",
            type: "string",
            xmlRequired: true
          },
          {
            name: "workitemId",
            type: "ID",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "ProcessResult",
        mustQualify: true,
        fields: [
          {
            name: "entityId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "errors",
            type: "Error",
            xmlRequired: false
          },
          {
            name: "instanceId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "instanceStatus",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "newWorkitemIds",
            nillable: "true",
            type: "ID",
            xmlRequired: false
          },
          {
            name: "success",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DeleteResult",
        mustQualify: true,
        fields: [
          {
            name: "errors",
            nillable: "true",
            type: "Error",
            xmlRequired: false
          },
          {
            name: "id",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "success",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "UndeleteResult",
        mustQualify: true,
        fields: [
          {
            name: "errors",
            type: "Error",
            xmlRequired: false
          },
          {
            name: "id",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "success",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "LeadConvert",
        mustQualify: true,
        fields: [
          {
            name: "accountId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "contactId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "convertedStatus",
            type: "string",
            xmlRequired: true
          },
          {
            name: "doNotCreateOpportunity",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "leadId",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "opportunityName",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "overwriteLeadSource",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "ownerId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "sendNotificationEmail",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "LeadConvertResult",
        mustQualify: true,
        fields: [
          {
            name: "accountId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "contactId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "errors",
            type: "Error",
            xmlRequired: false
          },
          {
            name: "leadId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "opportunityId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "success",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeSObjectResult",
        mustQualify: true,
        fields: [
          {
            name: "activateable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "childRelationships",
            type: "ChildRelationship",
            xmlRequired: false
          },
          {
            name: "createable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "custom",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "deletable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "fields",
            nillable: "true",
            type: "Field",
            xmlRequired: false
          },
          {
            name: "keyPrefix",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "label",
            type: "string",
            xmlRequired: true
          },
          {
            name: "labelPlural",
            type: "string",
            xmlRequired: true
          },
          {
            name: "layoutable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "mergeable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "name",
            type: "string",
            xmlRequired: true
          },
          {
            name: "queryable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "recordTypeInfos",
            type: "RecordTypeInfo",
            xmlRequired: false
          },
          {
            name: "replicateable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "retrieveable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "searchable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "undeletable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "updateable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "urlDetail",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "urlEdit",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "urlNew",
            nillable: "true",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "ChildRelationship",
        mustQualify: true,
        fields: [
          {
            name: "cascadeDelete",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "childSObject",
            type: "string",
            xmlRequired: true
          },
          {
            name: "field",
            type: "string",
            xmlRequired: true
          },
          {
            name: "relationshipName",
            type: "string",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeGlobalResult",
        mustQualify: true,
        fields: [
          {
            name: "encoding",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "maxBatchSize",
            type: "int",
            xmlRequired: true
          },
          {
            name: "types",
            nillable: "true",
            type: "string",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.SimpleType.create({
        inheritsFrom: "string",
        name: "fieldType",
        xmlSource: "SimpleType",
        valueMap: [
          "string",
          "picklist",
          "multipicklist",
          "combobox",
          "reference",
          "base64",
          "boolean",
          "currency",
          "textarea",
          "int",
          "double",
          "percent",
          "phone",
          "id",
          "date",
          "datetime",
          "url",
          "email",
          "anyType"
        ]
      })
      ,
      isc.SimpleType.create({
        inheritsFrom: "string",
        name: "soapType",
        xmlSource: "SimpleType",
        valueMap: [
          "tns:ID",
          "xsd:base64Binary",
          "xsd:boolean",
          "xsd:double",
          "xsd:int",
          "xsd:string",
          "xsd:date",
          "xsd:dateTime",
          "xsd:anyType"
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "Field",
        mustQualify: true,
        fields: [
          {
            name: "autoNumber",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "byteLength",
            type: "int",
            xmlRequired: true
          },
          {
            name: "calculated",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "calculatedFormula",
            type: "string",
            xmlRequired: false
          },
          {
            name: "caseSensitive",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "controllerName",
            type: "string",
            xmlRequired: false
          },
          {
            name: "createable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "custom",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "defaultValueFormula",
            type: "string",
            xmlRequired: false
          },
          {
            name: "defaultedOnCreate",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "dependentPicklist",
            type: "boolean",
            xmlRequired: false
          },
          {
            name: "digits",
            type: "int",
            xmlRequired: true
          },
          {
            name: "externalId",
            type: "boolean",
            xmlRequired: false
          },
          {
            name: "filterable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "htmlFormatted",
            type: "boolean",
            xmlRequired: false
          },
          {
            name: "label",
            type: "string",
            xmlRequired: true
          },
          {
            name: "length",
            type: "int",
            xmlRequired: true
          },
          {
            name: "name",
            type: "string",
            xmlRequired: true
          },
          {
            name: "nameField",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "namePointing",
            type: "boolean",
            xmlRequired: false
          },
          {
            name: "nillable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "picklistValues",
            nillable: "true",
            type: "PicklistEntry",
            xmlRequired: false
          },
          {
            name: "precision",
            type: "int",
            xmlRequired: true
          },
          {
            name: "referenceTo",
            nillable: "true",
            type: "string",
            xmlRequired: false
          },
          {
            name: "relationshipName",
            type: "string",
            xmlRequired: false
          },
          {
            name: "restrictedPicklist",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "scale",
            type: "int",
            xmlRequired: true
          },
          {
            name: "soapType",
            type: "soapType",
            xmlRequired: true
          },
          {
            name: "sortable",
            type: "boolean",
            xmlRequired: false
          },
          {
            name: "type",
            type: "fieldType",
            xmlRequired: true
          },
          {
            name: "unique",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "updateable",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "PicklistEntry",
        mustQualify: true,
        fields: [
          {
            name: "active",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "defaultValue",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "label",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "validFor",
            type: "base64Binary",
            xmlRequired: false
          },
          {
            name: "value",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeSoftphoneLayoutResult",
        mustQualify: true,
        fields: [
          {
            name: "callTypes",
            type: "DescribeSoftphoneLayoutCallType",
            xmlRequired: true
          },
          {
            name: "id",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "name",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeSoftphoneLayoutCallType",
        mustQualify: true,
        fields: [
          {
            name: "infoFields",
            type: "DescribeSoftphoneLayoutInfoField",
            xmlRequired: true
          },
          {
            name: "name",
            type: "string",
            xmlRequired: true
          },
          {
            name: "sections",
            type: "DescribeSoftphoneLayoutSection",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeSoftphoneLayoutInfoField",
        mustQualify: true,
        fields: [
          {
            name: "name",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeSoftphoneLayoutSection",
        mustQualify: true,
        fields: [
          {
            name: "entityApiName",
            type: "string",
            xmlRequired: true
          },
          {
            name: "items",
            type: "DescribeSoftphoneLayoutItem",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeSoftphoneLayoutItem",
        mustQualify: true,
        fields: [
          {
            name: "itemApiName",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeLayoutResult",
        mustQualify: true,
        fields: [
          {
            name: "layouts",
            type: "DescribeLayout",
            xmlRequired: true
          },
          {
            name: "recordTypeMappings",
            type: "RecordTypeMapping",
            xmlRequired: false
          },
          {
            name: "recordTypeSelectorRequired",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeLayout",
        mustQualify: true,
        fields: [
          {
            name: "detailLayoutSections",
            type: "DescribeLayoutSection",
            xmlRequired: false
          },
          {
            name: "editLayoutSections",
            type: "DescribeLayoutSection",
            xmlRequired: false
          },
          {
            name: "id",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "relatedLists",
            type: "RelatedList",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeLayoutSection",
        mustQualify: true,
        fields: [
          {
            name: "columns",
            type: "int",
            xmlRequired: true
          },
          {
            name: "heading",
            type: "string",
            xmlRequired: true
          },
          {
            name: "layoutRows",
            type: "DescribeLayoutRow",
            xmlRequired: true
          },
          {
            name: "rows",
            type: "int",
            xmlRequired: true
          },
          {
            name: "useCollapsibleSection",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "useHeading",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeLayoutRow",
        mustQualify: true,
        fields: [
          {
            name: "layoutItems",
            type: "DescribeLayoutItem",
            xmlRequired: true
          },
          {
            name: "numItems",
            type: "int",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeLayoutItem",
        mustQualify: true,
        fields: [
          {
            name: "editable",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "label",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "layoutComponents",
            type: "DescribeLayoutComponent",
            xmlRequired: false
          },
          {
            name: "placeholder",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "required",
            type: "boolean",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeLayoutComponent",
        mustQualify: true,
        fields: [
          {
            name: "displayLines",
            type: "int",
            xmlRequired: true
          },
          {
            name: "tabOrder",
            type: "int",
            xmlRequired: true
          },
          {
            name: "type",
            type: "layoutComponentType",
            xmlRequired: true
          },
          {
            name: "value",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.SimpleType.create({
        inheritsFrom: "string",
        name: "layoutComponentType",
        xmlSource: "SimpleType",
        valueMap: [
          "Field",
          "Separator"
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "RecordTypeInfo",
        mustQualify: true,
        fields: [
          {
            name: "available",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "defaultRecordTypeMapping",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "name",
            type: "string",
            xmlRequired: true
          },
          {
            name: "recordTypeId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "RecordTypeMapping",
        mustQualify: true,
        fields: [
          {
            name: "available",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "defaultRecordTypeMapping",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "layoutId",
            type: "ID",
            xmlRequired: true
          },
          {
            name: "name",
            type: "string",
            xmlRequired: true
          },
          {
            name: "picklistsForRecordType",
            nillable: "true",
            type: "PicklistForRecordType",
            xmlRequired: false
          },
          {
            name: "recordTypeId",
            nillable: "true",
            type: "ID",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "PicklistForRecordType",
        mustQualify: true,
        fields: [
          {
            name: "picklistName",
            type: "string",
            xmlRequired: true
          },
          {
            name: "picklistValues",
            nillable: "true",
            type: "PicklistEntry",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "RelatedList",
        mustQualify: true,
        fields: [
          {
            name: "columns",
            type: "RelatedListColumn",
            xmlRequired: true
          },
          {
            name: "custom",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "field",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "label",
            type: "string",
            xmlRequired: true
          },
          {
            name: "limitRows",
            type: "int",
            xmlRequired: true
          },
          {
            name: "name",
            type: "string",
            xmlRequired: true
          },
          {
            name: "sobject",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "sort",
            type: "RelatedListSort",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "RelatedListColumn",
        mustQualify: true,
        fields: [
          {
            name: "field",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "format",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "label",
            type: "string",
            xmlRequired: true
          },
          {
            name: "name",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "RelatedListSort",
        mustQualify: true,
        fields: [
          {
            name: "ascending",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "column",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeTabSetResult",
        mustQualify: true,
        fields: [
          {
            name: "label",
            type: "string",
            xmlRequired: true
          },
          {
            name: "logoUrl",
            type: "string",
            xmlRequired: true
          },
          {
            name: "namespace",
            type: "string",
            xmlRequired: false
          },
          {
            name: "selected",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "tabs",
            type: "DescribeTab",
            xmlRequired: false
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "DescribeTab",
        mustQualify: true,
        fields: [
          {
            name: "custom",
            type: "boolean",
            xmlRequired: true
          },
          {
            name: "label",
            type: "string",
            xmlRequired: true
          },
          {
            name: "sobjectName",
            nillable: "true",
            type: "string",
            xmlRequired: true
          },
          {
            name: "url",
            type: "string",
            xmlRequired: true
          }
        ]
      })
    ]
  })
  isc.SchemaSet.create({
    qualifyAll: true,
    schemaNamespace: "urn:fault.partner.soap.sforce.com",
    serviceNamespace: "urn:partner.soap.sforce.com",
    schemaImports: [],
    schema: [
      isc.SimpleType.create({
        inheritsFrom: "string",
        name: "ExceptionCode",
        xmlSource: "SimpleType",
        valueMap: [
          "API_CURRENTLY_DISABLED",
          "API_DISABLED_FOR_ORG",
          "CLIENT_NOT_ACCESSIBLE_FOR_USER",
          "CLIENT_REQUIRE_UPDATE_FOR_USER",
          "EMAIL_BATCH_SIZE_LIMIT_EXCEEDED",
          "EMAIL_TO_CASE_INVALID_ROUTING",
          "EMAIL_TO_CASE_LIMIT_EXCEEDED",
          "EMAIL_TO_CASE_NOT_ENABLED",
          "EXCEEDED_ID_LIMIT",
          "EXCEEDED_LEAD_CONVERT_LIMIT",
          "EXCEEDED_MAX_SIZE_REQUEST",
          "EXCEEDED_MAX_TYPES_LIMIT",
          "EXCEEDED_QUOTA",
          "FUNCTIONALITY_NOT_ENABLED",
          "INACTIVE_OWNER_OR_USER",
          "INSUFFICIENT_ACCESS",
          "INVALID_ASSIGNMENT_RULE",
          "INVALID_BATCH_SIZE",
          "INVALID_CLIENT",
          "INVALID_CROSS_REFERENCE_KEY",
          "INVALID_FIELD",
          "INVALID_ID_FIELD",
          "INVALID_LOCATOR",
          "INVALID_LOGIN",
          "INVALID_NEW_PASSWORD",
          "INVALID_OPERATION",
          "INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
          "INVALID_QUERY_FILTER_OPERATOR",
          "INVALID_QUERY_LOCATOR",
          "INVALID_QUERY_SCOPE",
          "INVALID_REPLICATION_DATE",
          "INVALID_SEARCH",
          "INVALID_SEARCH_SCOPE",
          "INVALID_SESSION_ID",
          "INVALID_SOAP_HEADER",
          "INVALID_SSO_GATEWAY_URL",
          "INVALID_TYPE",
          "INVALID_TYPE_FOR_OPERATION",
          "LOGIN_DURING_RESTRICTED_DOMAIN",
          "LOGIN_DURING_RESTRICTED_TIME",
          "MALFORMED_ID",
          "MALFORMED_QUERY",
          "MALFORMED_SEARCH",
          "MISSING_ARGUMENT",
          "NOT_MODIFIED",
          "NUMBER_OUTSIDE_VALID_RANGE",
          "OPERATION_TOO_LARGE",
          "ORG_LOCKED",
          "PASSWORD_LOCKOUT",
          "QUERY_TIMEOUT",
          "QUERY_TOO_COMPLICATED",
          "REQUEST_LIMIT_EXCEEDED",
          "REQUEST_RUNNING_TOO_LONG",
          "SERVER_UNAVAILABLE",
          "SSO_SERVICE_DOWN",
          "TRIAL_EXPIRED",
          "UNKNOWN_EXCEPTION",
          "UNSUPPORTED_API_VERSION",
          "UNSUPPORTED_CLIENT"
        ]
      })
      ,
      isc.SimpleType.create({
        inheritsFrom: "QName",
        name: "FaultCode",
        xmlSource: "SimpleType",
        valueMap: [
          "fns:API_CURRENTLY_DISABLED",
          "fns:API_DISABLED_FOR_ORG",
          "fns:CLIENT_NOT_ACCESSIBLE_FOR_USER",
          "fns:CLIENT_REQUIRE_UPDATE_FOR_USER",
          "fns:EMAIL_BATCH_SIZE_LIMIT_EXCEEDED",
          "fns:EMAIL_TO_CASE_INVALID_ROUTING",
          "fns:EMAIL_TO_CASE_LIMIT_EXCEEDED",
          "fns:EMAIL_TO_CASE_NOT_ENABLED",
          "fns:EXCEEDED_ID_LIMIT",
          "fns:EXCEEDED_LEAD_CONVERT_LIMIT",
          "fns:EXCEEDED_MAX_SIZE_REQUEST",
          "fns:EXCEEDED_MAX_TYPES_LIMIT",
          "fns:EXCEEDED_QUOTA",
          "fns:FUNCTIONALITY_NOT_ENABLED",
          "fns:INACTIVE_OWNER_OR_USER",
          "fns:INSUFFICIENT_ACCESS",
          "fns:INVALID_ASSIGNMENT_RULE",
          "fns:INVALID_BATCH_SIZE",
          "fns:INVALID_CLIENT",
          "fns:INVALID_CROSS_REFERENCE_KEY",
          "fns:INVALID_FIELD",
          "fns:INVALID_ID_FIELD",
          "fns:INVALID_LOCATOR",
          "fns:INVALID_LOGIN",
          "fns:INVALID_NEW_PASSWORD",
          "fns:INVALID_OPERATION",
          "fns:INVALID_OPERATION_WITH_EXPIRED_PASSWORD",
          "fns:INVALID_QUERY_FILTER_OPERATOR",
          "fns:INVALID_QUERY_LOCATOR",
          "fns:INVALID_QUERY_SCOPE",
          "fns:INVALID_REPLICATION_DATE",
          "fns:INVALID_SEARCH",
          "fns:INVALID_SEARCH_SCOPE",
          "fns:INVALID_SESSION_ID",
          "fns:INVALID_SOAP_HEADER",
          "fns:INVALID_SSO_GATEWAY_URL",
          "fns:INVALID_TYPE",
          "fns:INVALID_TYPE_FOR_OPERATION",
          "fns:LOGIN_DURING_RESTRICTED_DOMAIN",
          "fns:LOGIN_DURING_RESTRICTED_TIME",
          "fns:MALFORMED_ID",
          "fns:MALFORMED_QUERY",
          "fns:MALFORMED_SEARCH",
          "fns:MISSING_ARGUMENT",
          "fns:NOT_MODIFIED",
          "fns:NUMBER_OUTSIDE_VALID_RANGE",
          "fns:OPERATION_TOO_LARGE",
          "fns:ORG_LOCKED",
          "fns:PASSWORD_LOCKOUT",
          "fns:QUERY_TIMEOUT",
          "fns:QUERY_TOO_COMPLICATED",
          "fns:REQUEST_LIMIT_EXCEEDED",
          "fns:REQUEST_RUNNING_TOO_LONG",
          "fns:SERVER_UNAVAILABLE",
          "fns:SSO_SERVICE_DOWN",
          "fns:TRIAL_EXPIRED",
          "fns:UNKNOWN_EXCEPTION",
          "fns:UNSUPPORTED_API_VERSION",
          "fns:UNSUPPORTED_CLIENT"
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "ApiFault",
        mustQualify: true,
        fields: [
          {
            name: "exceptionCode",
            type: "ExceptionCode",
            xmlRequired: true
          },
          {
            name: "exceptionMessage",
            type: "string",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSElement.create({
        ID: "fault",
        inheritsFrom: "ApiFault",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSComplexType.create({
        ID: "ApiQueryFault",
        inheritsFrom: "ApiFault",
        mustQualify: true,
        useParentFieldOrder: true,
        fields: [
          {
            name: "row",
            type: "int",
            xmlRequired: true
          },
          {
            name: "column",
            type: "int",
            xmlRequired: true
          }
        ]
      })
      ,
      isc.XSComplexType.create({
        ID: "LoginFault",
        inheritsFrom: "ApiFault",
        mustQualify: true,
        useParentFieldOrder: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "LoginFault",
        inheritsFrom: "LoginFault",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSComplexType.create({
        ID: "InvalidQueryLocatorFault",
        inheritsFrom: "ApiFault",
        mustQualify: true,
        useParentFieldOrder: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "InvalidQueryLocatorFault",
        inheritsFrom: "InvalidQueryLocatorFault",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSComplexType.create({
        ID: "InvalidNewPasswordFault",
        inheritsFrom: "ApiFault",
        mustQualify: true,
        useParentFieldOrder: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "InvalidNewPasswordFault",
        inheritsFrom: "InvalidNewPasswordFault",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSComplexType.create({
        ID: "InvalidIdFault",
        inheritsFrom: "ApiFault",
        mustQualify: true,
        useParentFieldOrder: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "InvalidIdFault",
        inheritsFrom: "InvalidIdFault",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSComplexType.create({
        ID: "UnexpectedErrorFault",
        inheritsFrom: "ApiFault",
        mustQualify: true,
        useParentFieldOrder: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "UnexpectedErrorFault",
        inheritsFrom: "UnexpectedErrorFault",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSComplexType.create({
        ID: "InvalidFieldFault",
        inheritsFrom: "ApiQueryFault",
        mustQualify: true,
        useParentFieldOrder: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "InvalidFieldFault",
        inheritsFrom: "InvalidFieldFault",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSComplexType.create({
        ID: "InvalidSObjectFault",
        inheritsFrom: "ApiQueryFault",
        mustQualify: true,
        useParentFieldOrder: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "InvalidSObjectFault",
        inheritsFrom: "InvalidSObjectFault",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSComplexType.create({
        ID: "MalformedQueryFault",
        inheritsFrom: "ApiQueryFault",
        mustQualify: true,
        useParentFieldOrder: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "MalformedQueryFault",
        inheritsFrom: "MalformedQueryFault",
        mustQualify: true,
        fields: []
      })
      ,
      isc.XSComplexType.create({
        ID: "MalformedSearchFault",
        inheritsFrom: "ApiQueryFault",
        mustQualify: true,
        useParentFieldOrder: true,
        fields: []
      })
      ,
      isc.XSElement.create({
        ID: "MalformedSearchFault",
        inheritsFrom: "MalformedSearchFault",
        mustQualify: true,
        fields: []
      })
    ]
  })
  isc.WebService.create({
    dataURL: "https://www.salesforce.com/services/Soap/u/8.0",
    serviceNamespace: "urn:partner.soap.sforce.com",
    soapStyle: "document",
    wsdlImports: [],
    schemaImports: [
      {
        location: "",
        namespace: "urn:sobject.partner.soap.sforce.com"
      },
      {
        location: "",
        namespace: "urn:partner.soap.sforce.com"
      },
      {
        location: "",
        namespace: "urn:partner.soap.sforce.com"
      },
      {
        location: "",
        namespace: "urn:sobject.partner.soap.sforce.com"
      },
      {
        location: "",
        namespace: "urn:fault.partner.soap.sforce.com"
      }
    ],
    bindings: [
      {
        name: "SoapBinding",
        portTypeName: "Soap",
        operation: [
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "login",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "LoginScopeHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "describeSObject",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "describeSObjects",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "describeGlobal",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "describeLayout",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "describeSoftphoneLayout",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "describeTabs",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "create",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "AssignmentRuleHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "MruHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "EmailHeader"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "update",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "AssignmentRuleHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "MruHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "EmailHeader"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "upsert",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "AssignmentRuleHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "MruHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "EmailHeader"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "merge",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "AssignmentRuleHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "MruHeader"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "delete",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "UserTerritoryDeleteHeader"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "undelete",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "retrieve",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "QueryOptions"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "MruHeader"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "process",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "convertLead",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "getDeleted",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "getUpdated",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "query",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "QueryOptions"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "MruHeader"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "queryAll",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "QueryOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "queryMore",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "QueryOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "search",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "getServerTimestamp",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "setPassword",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "resetPassword",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "EmailHeader"
              }
            ]
          },
          {
            inputEncoding: "literal",
            inputParts: "parameters",
            name: "getUserInfo",
            outputEncoding: "literal",
            outputParts: "",
            soapAction: "",
            inputHeaders: [
              {
                encoding: "literal",
                message: "Header",
                part: "SessionHeader"
              },
              {
                encoding: "literal",
                message: "Header",
                part: "CallOptions"
              }
            ]
          }
        ]
      }
    ],
    portTypes: [
      {
        portTypeName: "Soap",
        operation: [
          {
            inputMessage: "loginRequest",
            name: "login",
            outputMessage: "loginResponse"
          },
          {
            inputMessage: "describeSObjectRequest",
            name: "describeSObject",
            outputMessage: "describeSObjectResponse"
          },
          {
            inputMessage: "describeSObjectsRequest",
            name: "describeSObjects",
            outputMessage: "describeSObjectsResponse"
          },
          {
            inputMessage: "describeGlobalRequest",
            name: "describeGlobal",
            outputMessage: "describeGlobalResponse"
          },
          {
            inputMessage: "describeLayoutRequest",
            name: "describeLayout",
            outputMessage: "describeLayoutResponse"
          },
          {
            inputMessage: "describeSoftphoneLayoutRequest",
            name: "describeSoftphoneLayout",
            outputMessage: "describeSoftphoneLayoutResponse"
          },
          {
            inputMessage: "describeTabsRequest",
            name: "describeTabs",
            outputMessage: "describeTabsResponse"
          },
          {
            inputMessage: "createRequest",
            name: "create",
            outputMessage: "createResponse"
          },
          {
            inputMessage: "updateRequest",
            name: "update",
            outputMessage: "updateResponse"
          },
          {
            inputMessage: "upsertRequest",
            name: "upsert",
            outputMessage: "upsertResponse"
          },
          {
            inputMessage: "mergeRequest",
            name: "merge",
            outputMessage: "mergeResponse"
          },
          {
            inputMessage: "deleteRequest",
            name: "delete",
            outputMessage: "deleteResponse"
          },
          {
            inputMessage: "undeleteRequest",
            name: "undelete",
            outputMessage: "undeleteResponse"
          },
          {
            inputMessage: "retrieveRequest",
            name: "retrieve",
            outputMessage: "retrieveResponse"
          },
          {
            inputMessage: "processRequest",
            name: "process",
            outputMessage: "processResponse"
          },
          {
            inputMessage: "convertLeadRequest",
            name: "convertLead",
            outputMessage: "convertLeadResponse"
          },
          {
            inputMessage: "getDeletedRequest",
            name: "getDeleted",
            outputMessage: "getDeletedResponse"
          },
          {
            inputMessage: "getUpdatedRequest",
            name: "getUpdated",
            outputMessage: "getUpdatedResponse"
          },
          {
            inputMessage: "queryRequest",
            name: "query",
            outputMessage: "queryResponse"
          },
          {
            inputMessage: "queryAllRequest",
            name: "queryAll",
            outputMessage: "queryAllResponse"
          },
          {
            inputMessage: "queryMoreRequest",
            name: "queryMore",
            outputMessage: "queryMoreResponse"
          },
          {
            inputMessage: "searchRequest",
            name: "search",
            outputMessage: "searchResponse"
          },
          {
            inputMessage: "getServerTimestampRequest",
            name: "getServerTimestamp",
            outputMessage: "getServerTimestampResponse"
          },
          {
            inputMessage: "setPasswordRequest",
            name: "setPassword",
            outputMessage: "setPasswordResponse"
          },
          {
            inputMessage: "resetPasswordRequest",
            name: "resetPassword",
            outputMessage: "resetPasswordResponse"
          },
          {
            inputMessage: "getUserInfoRequest",
            name: "getUserInfo",
            outputMessage: "getUserInfoResponse"
          }
        ]
      }
    ],
    messages: [
      isc.WSDLMessage.create({
        ID: "message:Header",
        fields: [
          {
            name: "LoginScopeHeader",
            partName: "LoginScopeHeader",
            type: "LoginScopeHeader",
            xmlRequired: true,
            xsElementRef: true
          },
          {
            name: "SessionHeader",
            partName: "SessionHeader",
            type: "SessionHeader",
            xmlRequired: true,
            xsElementRef: true
          },
          {
            name: "CallOptions",
            partName: "CallOptions",
            type: "CallOptions",
            xmlRequired: true,
            xsElementRef: true
          },
          {
            name: "QueryOptions",
            partName: "QueryOptions",
            type: "QueryOptions",
            xmlRequired: true,
            xsElementRef: true
          },
          {
            name: "AssignmentRuleHeader",
            partName: "AssignmentRuleHeader",
            type: "AssignmentRuleHeader",
            xmlRequired: true,
            xsElementRef: true
          },
          {
            name: "MruHeader",
            partName: "MruHeader",
            type: "MruHeader",
            xmlRequired: true,
            xsElementRef: true
          },
          {
            name: "EmailHeader",
            partName: "EmailHeader",
            type: "EmailHeader",
            xmlRequired: true,
            xsElementRef: true
          },
          {
            name: "UserTerritoryDeleteHeader",
            partName: "UserTerritoryDeleteHeader",
            type: "UserTerritoryDeleteHeader",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:ApiFault",
        fields: [
          {
            name: "fault",
            partName: "fault",
            type: "fault",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:LoginFault",
        fields: [
          {
            name: "LoginFault",
            partName: "fault",
            type: "LoginFault",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:InvalidQueryLocatorFault",
        fields: [
          {
            name: "InvalidQueryLocatorFault",
            partName: "fault",
            type: "InvalidQueryLocatorFault",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:InvalidNewPasswordFault",
        fields: [
          {
            name: "InvalidNewPasswordFault",
            partName: "fault",
            type: "InvalidNewPasswordFault",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:InvalidIdFault",
        fields: [
          {
            name: "InvalidIdFault",
            partName: "fault",
            type: "InvalidIdFault",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:UnexpectedErrorFault",
        fields: [
          {
            name: "UnexpectedErrorFault",
            partName: "fault",
            type: "UnexpectedErrorFault",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:InvalidFieldFault",
        fields: [
          {
            name: "InvalidFieldFault",
            partName: "fault",
            type: "InvalidFieldFault",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:InvalidSObjectFault",
        fields: [
          {
            name: "InvalidSObjectFault",
            partName: "fault",
            type: "InvalidSObjectFault",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:MalformedQueryFault",
        fields: [
          {
            name: "MalformedQueryFault",
            partName: "fault",
            type: "MalformedQueryFault",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:MalformedSearchFault",
        fields: [
          {
            name: "MalformedSearchFault",
            partName: "fault",
            type: "MalformedSearchFault",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:loginRequest",
        fields: [
          {
            name: "login",
            partName: "parameters",
            type: "login",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:loginResponse",
        fields: [
          {
            name: "loginResponse",
            partName: "parameters",
            type: "loginResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:describeSObjectRequest",
        fields: [
          {
            name: "describeSObject",
            partName: "parameters",
            type: "describeSObject",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:describeSObjectResponse",
        fields: [
          {
            name: "describeSObjectResponse",
            partName: "parameters",
            type: "describeSObjectResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:describeSObjectsRequest",
        fields: [
          {
            name: "describeSObjects",
            partName: "parameters",
            type: "describeSObjects",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:describeSObjectsResponse",
        fields: [
          {
            name: "describeSObjectsResponse",
            partName: "parameters",
            type: "describeSObjectsResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:describeGlobalRequest",
        fields: [
          {
            name: "describeGlobal",
            partName: "parameters",
            type: "describeGlobal",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:describeGlobalResponse",
        fields: [
          {
            name: "describeGlobalResponse",
            partName: "parameters",
            type: "describeGlobalResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:describeLayoutRequest",
        fields: [
          {
            name: "describeLayout",
            partName: "parameters",
            type: "describeLayout",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:describeLayoutResponse",
        fields: [
          {
            name: "describeLayoutResponse",
            partName: "parameters",
            type: "describeLayoutResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:describeSoftphoneLayoutRequest",
        fields: [
          {
            name: "describeSoftphoneLayout",
            partName: "parameters",
            type: "describeSoftphoneLayout",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:describeSoftphoneLayoutResponse",
        fields: [
          {
            name: "describeSoftphoneLayoutResponse",
            partName: "parameters",
            type: "describeSoftphoneLayoutResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:describeTabsRequest",
        fields: [
          {
            name: "describeTabs",
            partName: "parameters",
            type: "describeTabs",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:describeTabsResponse",
        fields: [
          {
            name: "describeTabsResponse",
            partName: "parameters",
            type: "describeTabsResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:createRequest",
        fields: [
          {
            name: "create",
            partName: "parameters",
            type: "create",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:createResponse",
        fields: [
          {
            name: "createResponse",
            partName: "parameters",
            type: "createResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:updateRequest",
        fields: [
          {
            name: "update",
            partName: "parameters",
            type: "update",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:updateResponse",
        fields: [
          {
            name: "updateResponse",
            partName: "parameters",
            type: "updateResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:upsertRequest",
        fields: [
          {
            name: "upsert",
            partName: "parameters",
            type: "upsert",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:upsertResponse",
        fields: [
          {
            name: "upsertResponse",
            partName: "parameters",
            type: "upsertResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:mergeRequest",
        fields: [
          {
            name: "merge",
            partName: "parameters",
            type: "merge",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:mergeResponse",
        fields: [
          {
            name: "mergeResponse",
            partName: "parameters",
            type: "mergeResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:deleteRequest",
        fields: [
          {
            name: "delete",
            partName: "parameters",
            type: "delete",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:deleteResponse",
        fields: [
          {
            name: "deleteResponse",
            partName: "parameters",
            type: "deleteResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:undeleteRequest",
        fields: [
          {
            name: "undelete",
            partName: "parameters",
            type: "undelete",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:undeleteResponse",
        fields: [
          {
            name: "undeleteResponse",
            partName: "parameters",
            type: "undeleteResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:retrieveRequest",
        fields: [
          {
            name: "retrieve",
            partName: "parameters",
            type: "retrieve",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:retrieveResponse",
        fields: [
          {
            name: "retrieveResponse",
            partName: "parameters",
            type: "retrieveResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:processRequest",
        fields: [
          {
            name: "process",
            partName: "parameters",
            type: "process",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:processResponse",
        fields: [
          {
            name: "processResponse",
            partName: "parameters",
            type: "processResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:convertLeadRequest",
        fields: [
          {
            name: "convertLead",
            partName: "parameters",
            type: "convertLead",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:convertLeadResponse",
        fields: [
          {
            name: "convertLeadResponse",
            partName: "parameters",
            type: "convertLeadResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:getDeletedRequest",
        fields: [
          {
            name: "getDeleted",
            partName: "parameters",
            type: "getDeleted",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:getDeletedResponse",
        fields: [
          {
            name: "getDeletedResponse",
            partName: "parameters",
            type: "getDeletedResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:getUpdatedRequest",
        fields: [
          {
            name: "getUpdated",
            partName: "parameters",
            type: "getUpdated",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:getUpdatedResponse",
        fields: [
          {
            name: "getUpdatedResponse",
            partName: "parameters",
            type: "getUpdatedResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:queryRequest",
        fields: [
          {
            name: "query",
            partName: "parameters",
            type: "query",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:queryResponse",
        fields: [
          {
            name: "queryResponse",
            partName: "parameters",
            type: "queryResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:queryAllRequest",
        fields: [
          {
            name: "queryAll",
            partName: "parameters",
            type: "queryAll",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:queryAllResponse",
        fields: [
          {
            name: "queryAllResponse",
            partName: "parameters",
            type: "queryAllResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:queryMoreRequest",
        fields: [
          {
            name: "queryMore",
            partName: "parameters",
            type: "queryMore",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:queryMoreResponse",
        fields: [
          {
            name: "queryMoreResponse",
            partName: "parameters",
            type: "queryMoreResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:searchRequest",
        fields: [
          {
            name: "search",
            partName: "parameters",
            type: "search",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:searchResponse",
        fields: [
          {
            name: "searchResponse",
            partName: "parameters",
            type: "searchResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:getServerTimestampRequest",
        fields: [
          {
            name: "getServerTimestamp",
            partName: "parameters",
            type: "getServerTimestamp",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:getServerTimestampResponse",
        fields: [
          {
            name: "getServerTimestampResponse",
            partName: "parameters",
            type: "getServerTimestampResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:setPasswordRequest",
        fields: [
          {
            name: "setPassword",
            partName: "parameters",
            type: "setPassword",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:setPasswordResponse",
        fields: [
          {
            name: "setPasswordResponse",
            partName: "parameters",
            type: "setPasswordResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:resetPasswordRequest",
        fields: [
          {
            name: "resetPassword",
            partName: "parameters",
            type: "resetPassword",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:resetPasswordResponse",
        fields: [
          {
            name: "resetPasswordResponse",
            partName: "parameters",
            type: "resetPasswordResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:getUserInfoRequest",
        fields: [
          {
            name: "getUserInfo",
            partName: "parameters",
            type: "getUserInfo",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
      ,
      isc.WSDLMessage.create({
        ID: "message:getUserInfoResponse",
        fields: [
          {
            name: "getUserInfoResponse",
            partName: "parameters",
            type: "getUserInfoResponse",
            xmlRequired: true,
            xsElementRef: true
          }
        ]
      })
    ]
  })
  isc.SForce = isc.WebService.get("urn:partner.soap.sforce.com");
  if (isc.SForce) {
    isc.A = isc.SForce.getPrototype();
    isc.B = isc._allFuncs;
    isc.C = isc.B._maxIndex;
    isc.D = isc._funcClasses;
    isc.D[isc.C] = isc.A.Class;
    isc.A.detailFields = ["Id", "Type", "ParentId", "LastModifiedDate",
      "LastModifiedById", "LastActivityDate", "CreatedDate", "CreatedById"];
    isc.A.hiddenFields = ["SystemModstamp"];
    isc.B.push(isc.A.getHeaderData = function isc_SForce_getHeaderData(_1) {
          var _2 = {};
          if (_1.operationType == "fetch") {
            _2.QueryOptions = {batchSize: 75};
          }
          if (this.sessionId
              != null) {
            _2.SessionHeader = {sessionId: this.sessionId};
          }
          return _2
        }
        , isc.A.login = function isc_SForce_login(_1, _2, _3) {
          this.callOperation("login", {username: _1, password: _2},
              "//default:result", {target: this, methodName: "loginReply"}, {
                willHandleError: true,
                $40z: _3,
                showPrompt: true,
                prompt: "Logging into SalesForce.."
              })
        }
        , isc.A.loginReply = function isc_SForce_loginReply(_1, _2, _3, _4) {
          if (_3.status < 0) {
            return this.fireCallback(_4.$40z, "loginData", [false])
          }
          var _5 = _1[0];
          this.logDebug("login data: " + this.echo(_5));
          this.dataURL = _5.serverUrl;
          this.sessionId = _5.sessionId;
          this.logInfo("got sessionID: " + this.sessionId);
          this.fireCallback(_4.$40z, "loginData", [_5])
        }
        ,
        isc.A.ensureLoggedIn = function isc_SForce_ensureLoggedIn(_1, _2, _3) {
          if (this.sessionId) {
            return this.fireCallback(_1);
          }
          var _4 = this;
          isc.showLoginDialog(function (_5, _6) {
            if (_5 == null) {
              return;
            }
            _4.login(_5.username, _5.password, function (_7) {
              _6(_7);
              if (_7) {
                isc.Class.fireCallback(_1)
              }
            })
          }, isc.addProperties(
              {title: "Please log in to SalesForce", dismissable: _2}, _3))
        }
        , isc.A.getEntityList = function isc_SForce_getEntityList(_1) {
          this.$400 = _1;
          this.callOperation("describeGlobal", null, "//default:types",
              {target: this, methodName: "describeGlobalReply"})
        }
        ,
        isc.A.describeGlobalReply = function isc_SForce_describeGlobalReply(_1) {
          this.fireCallback(this.$400, "list", [_1])
        }
        , isc.A.getEntity = function isc_SForce_getEntity(_1, _2) {
          var _3 = this;
          this.callOperation("describeSObjects", {sObjectType: _1}, null,
              function (_4) {
                _3.describeObjectReply(_4, _1, _2)
              })
        }
        ,
        isc.A.describeObjectReply = function isc_SForce_describeObjectReply(_1,
            _2, _3) {
          var _4 = _1.result, _5 = _4.fields;
          var _6 = this.convertSchema(_4, _2);
          if (this.logIsDebugEnabled()) {
            this.logDebug("converted schema: " + this.echoAll(_6.getFields()))
          }
          _6.sfFields = _4.fields;
          this.fireCallback(_3, "schema", [_6])
        }
        , isc.A.convertSchema = function isc_SForce_convertSchema(_1, _2) {
          var _3 = _1.fields, _4 = [];
          for (var i = 0; i < _3.length; i++) {
            var _6 = _3[i], _7 = {};
            _7.name = _6.name;
            if (this.detailFields.contains(_7.name)) {
              _7.detail = true;
            }
            if (this.hiddenFields.contains(_7.name)) {
              _7.hidden = true;
            }
            var _8 = _6.soapType;
            if (_8.contains(":")) {
              _8 = _8.substring(_8.indexOf(":") + 1);
            }
            _7.type = _8;
            _7.title = _6.label;
            _7.canEdit = _6.updateable;
            if (_6.type == "id") {
              _7.primaryKey = true;
            }
            if (_6.length != 0) {
              _7.length = _6.length;
            }
            _4.add(_7)
          }
          var _9 = _1.childRelationships, _10 = [];
          if (_9) {
            for (var i = 0; i < _9.length; i++) {
              var _11 = _9[i];
              _10.add({dsName: _11.childSObject, fieldName: _11.field})
            }
          }
          return isc.SFDataSource.create(
              {sfName: _1.name, ID: _2, childRelations: _10, fields: _4})
        }
        , isc.A.deploySControl = function isc_SForce_deploySControl(_1, _2) {
          if (this.SControlDS == null) {
            this.getEntity("SControl", function (_3) {
              isc.SForce.SControlDS = _3;
              isc.SForce.deploySControl(_1, _2)
            });
            return
          }
          var _3 = this.SControlDS;
          _3.fetchData({Name: _1}, function (_4, _5) {
            isc.SForce.installSControl(_1, _2, _5, _3)
          })
        }
        ,
        isc.A.installSControl = function isc_SForce_installSControl(_1, _2, _3,
            _4) {
          var _5 = this.getSControlHTML(_2);
          if (_3.length > 0) {
            _4.updateData({Id: _3[0].Id, HTMLWrapper: _5})
          } else {
            _4.addData({Name: _1, HTMLWrapper: _5})
          }
        }
        , isc.A.getSControlHTML = function isc_SForce_getSControlHTML(_1) {
          if (this.htmlPrefix == null) {
            var _2 = this.controlIsomorphicDir;
            this.htmlPrefix = ["<HTML>\r<BODY>\r<SCRIPT>window.isomorphicDir = '",
              _2, "'</SCRIPT>\r", "<SCRIPT src='", _2,
              "system/modules/ISC_Core.js'></SCRIPT>\r", "<SCRIPT src='", _2,
              "system/modules/ISC_Foundation.js'></SCRIPT>\r", "<SCRIPT src='",
              _2, "system/modules/ISC_Containers.js'></SCRIPT>\r",
              "<SCRIPT src='", _2, "system/modules/ISC_Grids.js'></SCRIPT>\r",
              "<SCRIPT src='", _2, "system/modules/ISC_Forms.js'></SCRIPT>\r",
              "<SCRIPT src='", _2,
              "system/modules/ISC_DataBinding.js'></SCRIPT>\r", "<SCRIPT src='",
              _2, "system/modules/ISC_SalesForce.js'></SCRIPT>\r",
              "<SCRIPT src='", _2, "system/modules/ISC_Kapow.js'></SCRIPT>\r",
              "<SCRIPT src='", _2, "skins/", this.controlSkin,
              "/load_skin.js'></SCRIPT>\r", "<SCRIPT>\r",
              '   var service = isc.WebService.get("urn:partner.soap.sforce.com");\r',
              '   service.sessionId = "{!User_Session_ID}";\r',
              '   service.dataURL = "{!API_Partner_Server_URL_60}";\r\r'].join(
                "")
          }
          return this.htmlPrefix + _1 + '</SCRIPT>\r</BODY></HTML>'
        }
    );
    isc.B._maxIndex = isc.C + 12;
    isc.defineClass("SFResultSet", "ResultSet");
    isc.A = isc.SFResultSet.getPrototype();
    isc.B = isc._allFuncs;
    isc.C = isc.B._maxIndex;
    isc.D = isc._funcClasses;
    isc.D[isc.C] = isc.A.Class;
    isc.B.push(
        isc.A.transformData = function isc_SFResultSet_transformData(_1, _2) {
          this.context = this.context || {};
          this.context.queryLocator = _2.queryLocator
        }
        , isc.A.setCriteria = function isc_SFResultSet_setCriteria(_1) {
          var _2 = this.Super("setCriteria", arguments);
          if (_2) {
            this.context = this.context || {};
            this.context.queryLocator = null
          }
        }
    );
    isc.B._maxIndex = isc.C + 2;
    isc.defineClass("SFDataSource", "DataSource");
    isc.A = isc.SFDataSource.getPrototype();
    isc.B = isc._allFuncs;
    isc.C = isc.B._maxIndex;
    isc.D = isc._funcClasses;
    isc.D[isc.C] = isc.A.Class;
    isc.A.serviceNamespace = "urn:partner.soap.sforce.com";
    isc.A.operationBindings = [{
      operationType: "fetch",
      wsOperation: "query",
      recordXPath: "//schema:records"
    }, {
      operationType: "fetch",
      operationId: "queryMore",
      wsOperation: "queryMore",
      recordXPath: "//schema:records"
    }, {
      operationType: "update",
      wsOperation: "update",
      recordName: "SaveResult"
    }, {operationType: "add", wsOperation: "create", recordName: "SaveResult"},
      {
        operationType: "remove",
        wsOperation: "delete",
        recordName: "DeleteResult"
      }];
    isc.A.resultSetClass = "SFResultSet";
    isc.A.autoLogin = true;
    isc.B.push(
        isc.A.transformRequest = function isc_SFDataSource_transformRequest(_1) {
          var _2 = _1.data;
          if (!isc.isAn.Array(_2)) {
            _2 = [_2];
          }
          if (_1.operationType == "remove") {
            return {ids: _2.getProperty("Id")}
          }
          if (_1.operationType != "fetch") {
            _2.setProperty("type", this.sfName || this.ID);
            return {sObjects: _2}
          }
          if (_1.queryLocator) {
            _1.operationId = "queryMore";
            return {queryLocator: _1.queryLocator}
          }
          var _3 = _1.data,
              _4 = "select " + this.getFieldNames().join(",") + " " + "from "
                  + (this.sfName || this.ID);
          if (_3 != null && !isc.isAn.emptyObject(_3)) {
            _4 += " where ";
            for (var _5 in _3) {
              _4 += _5 + "='" + _3[_5] + "' "
            }
          }
          return {queryString: _4}
        }
        ,
        isc.A.transformResponse = function isc_SFDataSource_transformResponse(_1,
            _2, _3) {
          var _4 = _2.operationType;
          if (_4 != "fetch") {
            var _5 = _3.selectString("//default:success");
            if (_5 != "true") {
              _1.errors = this.convertValidationErrors(_3);
              this.logWarn("save failed, errors are: " + this.echo(_1.errors));
              _1.status = -1;
              return _1
            }
            if (_4 != "remove") {
              var _6 = isc.addProperties({}, _2.oldValues, _2.data.sObjects[0]);
              if (_4 == "add") {
                _6.Id = _1.data[0].id
              }
              _1.data = _6
            } else {
              var _7 = _1.data[0].id;
              _1.data = {Id: _7};
              this.logWarn("cache sync data on remove: " + this.echo(_1.data))
            }
            return _1
          }
          var _8 = _3.selectString("//default:queryLocator");
          if (_8 != null && !isc.isAn.emptyString(_8)) {
            _1.queryLocator = _8
          }
          _1.totalRows = _3.selectNumber("//default:size");
          var _9 = _1.data;
          for (var i = 0; i < _9.length; i++) {
            if (isc.isAn.Array(_9[i].Id)) {
              _9[i].Id = _9[i].Id[0]
            }
          }
          return _1
        }
        ,
        isc.A.fetchData = function isc_SFDataSource_fetchData(_1, _2, _3, _4) {
          var _5 = this;
          if (this.autoLogin && !_4) {
            isc.SForce.ensureLoggedIn(function () {
              _5.fetchData(_1, _2, _3, true)
            });
            return
          }
          return this.Super("fetchData", arguments)
        }
        ,
        isc.A.convertValidationErrors = function isc_SFDataSource_convertValidationErrors(_1) {
          var _2 = _1.selectNodes("//default:errors"), _3 = {};
          for (var i = 0; i < _2.length; i++) {
            var _5 = _2[i];
            _5 = isc.xml.toJS(_5);
            _3[_5.fields] = _5.message
          }
          return _3
        }
    );
    isc.B._maxIndex = isc.C + 4
  }
  isc._moduleEnd = isc._SalesForce_end = (isc.timestamp ? isc.timestamp()
      : new Date().getTime());
  if (isc.Log && isc.Log.logIsInfoEnabled('loadTime')) {
    isc.Log.logInfo(
        'SalesForce module init time: ' + (isc._moduleEnd - isc._moduleStart)
        + 'ms', 'loadTime');
  }
  delete isc.definingFramework;
} else {
  if (window.isc && isc.Log && isc.Log.logWarn) {
    isc.Log.logWarn(
        "Duplicate load of module 'SalesForce'.");
  }
}
/*
 * Isomorphic SmartClient
 * Version v8.2p_2012-06-03 (2012-06-03)
 * Copyright(c) 1998 and beyond Isomorphic Software, Inc. All rights reserved.
 * "SmartClient" is a trademark of Isomorphic Software, Inc.
 *
 * licensing@smartclient.com
 *
 * http://smartclient.com/license
 */

