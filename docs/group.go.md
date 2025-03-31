# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-ionoscloud.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-ionoscloud.group.Group"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group ionoscloud_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.group.Group.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/group"

group.NewGroup(scope Construct, id *string, config GroupConfig) Group
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig">GroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupConfig">GroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessActivityLog">ResetAccessActivityLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageAiModelHub">ResetAccessAndManageAiModelHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageApiGateway">ResetAccessAndManageApiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageCdn">ResetAccessAndManageCdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageCertificates">ResetAccessAndManageCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageDns">ResetAccessAndManageDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageIamResources">ResetAccessAndManageIamResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageKaas">ResetAccessAndManageKaas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageLogging">ResetAccessAndManageLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageMonitoring">ResetAccessAndManageMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageNetworkFileStorage">ResetAccessAndManageNetworkFileStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageVpn">ResetAccessAndManageVpn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateBackupUnit">ResetCreateBackupUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateDatacenter">ResetCreateDatacenter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateFlowLog">ResetCreateFlowLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateInternetAccess">ResetCreateInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateK8SCluster">ResetCreateK8SCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateNetworkSecurityGroups">ResetCreateNetworkSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreatePcc">ResetCreatePcc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetCreateSnapshot">ResetCreateSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetManageDataplatform">ResetManageDataplatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetManageDbaas">ResetManageDbaas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetManageRegistry">ResetManageRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetReserveIp">ResetReserveIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetS3Privilege">ResetS3Privilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetUserId">ResetUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.resetUserIds">ResetUserIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.group.Group.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.group.Group.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.group.Group.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.group.Group.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.group.Group.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.group.Group.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.group.Group.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.group.Group.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.group.Group.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.group.Group.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.group.Group.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.group.Group.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.group.Group.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.group.Group.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.group.Group.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.group.Group.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.group.Group.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.group.Group.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.group.Group.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.group.Group.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.group.Group.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.group.Group.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.group.Group.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.group.Group.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.group.Group.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.group.Group.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.group.Group.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.group.Group.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.group.Group.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.group.Group.putTimeouts"></a>

```go
func PutTimeouts(value GroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.group.Group.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a>

---

##### `ResetAccessActivityLog` <a name="ResetAccessActivityLog" id="@cdktf/provider-ionoscloud.group.Group.resetAccessActivityLog"></a>

```go
func ResetAccessActivityLog()
```

##### `ResetAccessAndManageAiModelHub` <a name="ResetAccessAndManageAiModelHub" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageAiModelHub"></a>

```go
func ResetAccessAndManageAiModelHub()
```

##### `ResetAccessAndManageApiGateway` <a name="ResetAccessAndManageApiGateway" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageApiGateway"></a>

```go
func ResetAccessAndManageApiGateway()
```

##### `ResetAccessAndManageCdn` <a name="ResetAccessAndManageCdn" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageCdn"></a>

```go
func ResetAccessAndManageCdn()
```

##### `ResetAccessAndManageCertificates` <a name="ResetAccessAndManageCertificates" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageCertificates"></a>

```go
func ResetAccessAndManageCertificates()
```

##### `ResetAccessAndManageDns` <a name="ResetAccessAndManageDns" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageDns"></a>

```go
func ResetAccessAndManageDns()
```

##### `ResetAccessAndManageIamResources` <a name="ResetAccessAndManageIamResources" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageIamResources"></a>

```go
func ResetAccessAndManageIamResources()
```

##### `ResetAccessAndManageKaas` <a name="ResetAccessAndManageKaas" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageKaas"></a>

```go
func ResetAccessAndManageKaas()
```

##### `ResetAccessAndManageLogging` <a name="ResetAccessAndManageLogging" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageLogging"></a>

```go
func ResetAccessAndManageLogging()
```

##### `ResetAccessAndManageMonitoring` <a name="ResetAccessAndManageMonitoring" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageMonitoring"></a>

```go
func ResetAccessAndManageMonitoring()
```

##### `ResetAccessAndManageNetworkFileStorage` <a name="ResetAccessAndManageNetworkFileStorage" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageNetworkFileStorage"></a>

```go
func ResetAccessAndManageNetworkFileStorage()
```

##### `ResetAccessAndManageVpn` <a name="ResetAccessAndManageVpn" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageVpn"></a>

```go
func ResetAccessAndManageVpn()
```

##### `ResetCreateBackupUnit` <a name="ResetCreateBackupUnit" id="@cdktf/provider-ionoscloud.group.Group.resetCreateBackupUnit"></a>

```go
func ResetCreateBackupUnit()
```

##### `ResetCreateDatacenter` <a name="ResetCreateDatacenter" id="@cdktf/provider-ionoscloud.group.Group.resetCreateDatacenter"></a>

```go
func ResetCreateDatacenter()
```

##### `ResetCreateFlowLog` <a name="ResetCreateFlowLog" id="@cdktf/provider-ionoscloud.group.Group.resetCreateFlowLog"></a>

```go
func ResetCreateFlowLog()
```

##### `ResetCreateInternetAccess` <a name="ResetCreateInternetAccess" id="@cdktf/provider-ionoscloud.group.Group.resetCreateInternetAccess"></a>

```go
func ResetCreateInternetAccess()
```

##### `ResetCreateK8SCluster` <a name="ResetCreateK8SCluster" id="@cdktf/provider-ionoscloud.group.Group.resetCreateK8SCluster"></a>

```go
func ResetCreateK8SCluster()
```

##### `ResetCreateNetworkSecurityGroups` <a name="ResetCreateNetworkSecurityGroups" id="@cdktf/provider-ionoscloud.group.Group.resetCreateNetworkSecurityGroups"></a>

```go
func ResetCreateNetworkSecurityGroups()
```

##### `ResetCreatePcc` <a name="ResetCreatePcc" id="@cdktf/provider-ionoscloud.group.Group.resetCreatePcc"></a>

```go
func ResetCreatePcc()
```

##### `ResetCreateSnapshot` <a name="ResetCreateSnapshot" id="@cdktf/provider-ionoscloud.group.Group.resetCreateSnapshot"></a>

```go
func ResetCreateSnapshot()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.group.Group.resetId"></a>

```go
func ResetId()
```

##### `ResetManageDataplatform` <a name="ResetManageDataplatform" id="@cdktf/provider-ionoscloud.group.Group.resetManageDataplatform"></a>

```go
func ResetManageDataplatform()
```

##### `ResetManageDbaas` <a name="ResetManageDbaas" id="@cdktf/provider-ionoscloud.group.Group.resetManageDbaas"></a>

```go
func ResetManageDbaas()
```

##### `ResetManageRegistry` <a name="ResetManageRegistry" id="@cdktf/provider-ionoscloud.group.Group.resetManageRegistry"></a>

```go
func ResetManageRegistry()
```

##### `ResetReserveIp` <a name="ResetReserveIp" id="@cdktf/provider-ionoscloud.group.Group.resetReserveIp"></a>

```go
func ResetReserveIp()
```

##### `ResetS3Privilege` <a name="ResetS3Privilege" id="@cdktf/provider-ionoscloud.group.Group.resetS3Privilege"></a>

```go
func ResetS3Privilege()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.group.Group.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-ionoscloud.group.Group.resetUserId"></a>

```go
func ResetUserId()
```

##### `ResetUserIds` <a name="ResetUserIds" id="@cdktf/provider-ionoscloud.group.Group.resetUserIds"></a>

```go
func ResetUserIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.group.Group.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/group"

group.Group_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.group.Group.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.group.Group.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/group"

group.Group_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.group.Group.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/group"

group.Group_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/group"

group.Group_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Group to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Group that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Group to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference">GroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.users">Users</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList">GroupUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessActivityLogInput">AccessActivityLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageAiModelHubInput">AccessAndManageAiModelHubInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageApiGatewayInput">AccessAndManageApiGatewayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCdnInput">AccessAndManageCdnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCertificatesInput">AccessAndManageCertificatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageDnsInput">AccessAndManageDnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageIamResourcesInput">AccessAndManageIamResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageKaasInput">AccessAndManageKaasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageLoggingInput">AccessAndManageLoggingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageMonitoringInput">AccessAndManageMonitoringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageNetworkFileStorageInput">AccessAndManageNetworkFileStorageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageVpnInput">AccessAndManageVpnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createBackupUnitInput">CreateBackupUnitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createDatacenterInput">CreateDatacenterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createFlowLogInput">CreateFlowLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createInternetAccessInput">CreateInternetAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createK8SClusterInput">CreateK8SClusterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createNetworkSecurityGroupsInput">CreateNetworkSecurityGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createPccInput">CreatePccInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createSnapshotInput">CreateSnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageDataplatformInput">ManageDataplatformInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageDbaasInput">ManageDbaasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageRegistryInput">ManageRegistryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.reserveIpInput">ReserveIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.s3PrivilegeInput">S3PrivilegeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.userIdsInput">UserIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessActivityLog">AccessActivityLog</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageAiModelHub">AccessAndManageAiModelHub</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageApiGateway">AccessAndManageApiGateway</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCdn">AccessAndManageCdn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCertificates">AccessAndManageCertificates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageDns">AccessAndManageDns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageIamResources">AccessAndManageIamResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageKaas">AccessAndManageKaas</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageLogging">AccessAndManageLogging</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageMonitoring">AccessAndManageMonitoring</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageNetworkFileStorage">AccessAndManageNetworkFileStorage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageVpn">AccessAndManageVpn</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createBackupUnit">CreateBackupUnit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createDatacenter">CreateDatacenter</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createFlowLog">CreateFlowLog</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createInternetAccess">CreateInternetAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createK8SCluster">CreateK8SCluster</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createNetworkSecurityGroups">CreateNetworkSecurityGroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createPcc">CreatePcc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createSnapshot">CreateSnapshot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageDataplatform">ManageDataplatform</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageDbaas">ManageDbaas</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageRegistry">ManageRegistry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.reserveIp">ReserveIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.s3Privilege">S3Privilege</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.userIds">UserIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.group.Group.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.group.Group.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.group.Group.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.group.Group.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.group.Group.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.group.Group.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.group.Group.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.group.Group.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.group.Group.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.group.Group.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.group.Group.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.group.Group.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.group.Group.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.group.Group.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.group.Group.property.timeouts"></a>

```go
func Timeouts() GroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference">GroupTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-ionoscloud.group.Group.property.users"></a>

```go
func Users() GroupUsersList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupUsersList">GroupUsersList</a>

---

##### `AccessActivityLogInput`<sup>Optional</sup> <a name="AccessActivityLogInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessActivityLogInput"></a>

```go
func AccessActivityLogInput() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageAiModelHubInput`<sup>Optional</sup> <a name="AccessAndManageAiModelHubInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageAiModelHubInput"></a>

```go
func AccessAndManageAiModelHubInput() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageApiGatewayInput`<sup>Optional</sup> <a name="AccessAndManageApiGatewayInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageApiGatewayInput"></a>

```go
func AccessAndManageApiGatewayInput() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageCdnInput`<sup>Optional</sup> <a name="AccessAndManageCdnInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCdnInput"></a>

```go
func AccessAndManageCdnInput() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageCertificatesInput`<sup>Optional</sup> <a name="AccessAndManageCertificatesInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCertificatesInput"></a>

```go
func AccessAndManageCertificatesInput() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageDnsInput`<sup>Optional</sup> <a name="AccessAndManageDnsInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageDnsInput"></a>

```go
func AccessAndManageDnsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageIamResourcesInput`<sup>Optional</sup> <a name="AccessAndManageIamResourcesInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageIamResourcesInput"></a>

```go
func AccessAndManageIamResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageKaasInput`<sup>Optional</sup> <a name="AccessAndManageKaasInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageKaasInput"></a>

```go
func AccessAndManageKaasInput() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageLoggingInput`<sup>Optional</sup> <a name="AccessAndManageLoggingInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageLoggingInput"></a>

```go
func AccessAndManageLoggingInput() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageMonitoringInput`<sup>Optional</sup> <a name="AccessAndManageMonitoringInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageMonitoringInput"></a>

```go
func AccessAndManageMonitoringInput() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageNetworkFileStorageInput`<sup>Optional</sup> <a name="AccessAndManageNetworkFileStorageInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageNetworkFileStorageInput"></a>

```go
func AccessAndManageNetworkFileStorageInput() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageVpnInput`<sup>Optional</sup> <a name="AccessAndManageVpnInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageVpnInput"></a>

```go
func AccessAndManageVpnInput() interface{}
```

- *Type:* interface{}

---

##### `CreateBackupUnitInput`<sup>Optional</sup> <a name="CreateBackupUnitInput" id="@cdktf/provider-ionoscloud.group.Group.property.createBackupUnitInput"></a>

```go
func CreateBackupUnitInput() interface{}
```

- *Type:* interface{}

---

##### `CreateDatacenterInput`<sup>Optional</sup> <a name="CreateDatacenterInput" id="@cdktf/provider-ionoscloud.group.Group.property.createDatacenterInput"></a>

```go
func CreateDatacenterInput() interface{}
```

- *Type:* interface{}

---

##### `CreateFlowLogInput`<sup>Optional</sup> <a name="CreateFlowLogInput" id="@cdktf/provider-ionoscloud.group.Group.property.createFlowLogInput"></a>

```go
func CreateFlowLogInput() interface{}
```

- *Type:* interface{}

---

##### `CreateInternetAccessInput`<sup>Optional</sup> <a name="CreateInternetAccessInput" id="@cdktf/provider-ionoscloud.group.Group.property.createInternetAccessInput"></a>

```go
func CreateInternetAccessInput() interface{}
```

- *Type:* interface{}

---

##### `CreateK8SClusterInput`<sup>Optional</sup> <a name="CreateK8SClusterInput" id="@cdktf/provider-ionoscloud.group.Group.property.createK8SClusterInput"></a>

```go
func CreateK8SClusterInput() interface{}
```

- *Type:* interface{}

---

##### `CreateNetworkSecurityGroupsInput`<sup>Optional</sup> <a name="CreateNetworkSecurityGroupsInput" id="@cdktf/provider-ionoscloud.group.Group.property.createNetworkSecurityGroupsInput"></a>

```go
func CreateNetworkSecurityGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `CreatePccInput`<sup>Optional</sup> <a name="CreatePccInput" id="@cdktf/provider-ionoscloud.group.Group.property.createPccInput"></a>

```go
func CreatePccInput() interface{}
```

- *Type:* interface{}

---

##### `CreateSnapshotInput`<sup>Optional</sup> <a name="CreateSnapshotInput" id="@cdktf/provider-ionoscloud.group.Group.property.createSnapshotInput"></a>

```go
func CreateSnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.group.Group.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManageDataplatformInput`<sup>Optional</sup> <a name="ManageDataplatformInput" id="@cdktf/provider-ionoscloud.group.Group.property.manageDataplatformInput"></a>

```go
func ManageDataplatformInput() interface{}
```

- *Type:* interface{}

---

##### `ManageDbaasInput`<sup>Optional</sup> <a name="ManageDbaasInput" id="@cdktf/provider-ionoscloud.group.Group.property.manageDbaasInput"></a>

```go
func ManageDbaasInput() interface{}
```

- *Type:* interface{}

---

##### `ManageRegistryInput`<sup>Optional</sup> <a name="ManageRegistryInput" id="@cdktf/provider-ionoscloud.group.Group.property.manageRegistryInput"></a>

```go
func ManageRegistryInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.group.Group.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReserveIpInput`<sup>Optional</sup> <a name="ReserveIpInput" id="@cdktf/provider-ionoscloud.group.Group.property.reserveIpInput"></a>

```go
func ReserveIpInput() interface{}
```

- *Type:* interface{}

---

##### `S3PrivilegeInput`<sup>Optional</sup> <a name="S3PrivilegeInput" id="@cdktf/provider-ionoscloud.group.Group.property.s3PrivilegeInput"></a>

```go
func S3PrivilegeInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.group.Group.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-ionoscloud.group.Group.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `UserIdsInput`<sup>Optional</sup> <a name="UserIdsInput" id="@cdktf/provider-ionoscloud.group.Group.property.userIdsInput"></a>

```go
func UserIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessActivityLog`<sup>Required</sup> <a name="AccessActivityLog" id="@cdktf/provider-ionoscloud.group.Group.property.accessActivityLog"></a>

```go
func AccessActivityLog() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageAiModelHub`<sup>Required</sup> <a name="AccessAndManageAiModelHub" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageAiModelHub"></a>

```go
func AccessAndManageAiModelHub() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageApiGateway`<sup>Required</sup> <a name="AccessAndManageApiGateway" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageApiGateway"></a>

```go
func AccessAndManageApiGateway() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageCdn`<sup>Required</sup> <a name="AccessAndManageCdn" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCdn"></a>

```go
func AccessAndManageCdn() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageCertificates`<sup>Required</sup> <a name="AccessAndManageCertificates" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCertificates"></a>

```go
func AccessAndManageCertificates() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageDns`<sup>Required</sup> <a name="AccessAndManageDns" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageDns"></a>

```go
func AccessAndManageDns() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageIamResources`<sup>Required</sup> <a name="AccessAndManageIamResources" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageIamResources"></a>

```go
func AccessAndManageIamResources() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageKaas`<sup>Required</sup> <a name="AccessAndManageKaas" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageKaas"></a>

```go
func AccessAndManageKaas() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageLogging`<sup>Required</sup> <a name="AccessAndManageLogging" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageLogging"></a>

```go
func AccessAndManageLogging() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageMonitoring`<sup>Required</sup> <a name="AccessAndManageMonitoring" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageMonitoring"></a>

```go
func AccessAndManageMonitoring() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageNetworkFileStorage`<sup>Required</sup> <a name="AccessAndManageNetworkFileStorage" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageNetworkFileStorage"></a>

```go
func AccessAndManageNetworkFileStorage() interface{}
```

- *Type:* interface{}

---

##### `AccessAndManageVpn`<sup>Required</sup> <a name="AccessAndManageVpn" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageVpn"></a>

```go
func AccessAndManageVpn() interface{}
```

- *Type:* interface{}

---

##### `CreateBackupUnit`<sup>Required</sup> <a name="CreateBackupUnit" id="@cdktf/provider-ionoscloud.group.Group.property.createBackupUnit"></a>

```go
func CreateBackupUnit() interface{}
```

- *Type:* interface{}

---

##### `CreateDatacenter`<sup>Required</sup> <a name="CreateDatacenter" id="@cdktf/provider-ionoscloud.group.Group.property.createDatacenter"></a>

```go
func CreateDatacenter() interface{}
```

- *Type:* interface{}

---

##### `CreateFlowLog`<sup>Required</sup> <a name="CreateFlowLog" id="@cdktf/provider-ionoscloud.group.Group.property.createFlowLog"></a>

```go
func CreateFlowLog() interface{}
```

- *Type:* interface{}

---

##### `CreateInternetAccess`<sup>Required</sup> <a name="CreateInternetAccess" id="@cdktf/provider-ionoscloud.group.Group.property.createInternetAccess"></a>

```go
func CreateInternetAccess() interface{}
```

- *Type:* interface{}

---

##### `CreateK8SCluster`<sup>Required</sup> <a name="CreateK8SCluster" id="@cdktf/provider-ionoscloud.group.Group.property.createK8SCluster"></a>

```go
func CreateK8SCluster() interface{}
```

- *Type:* interface{}

---

##### `CreateNetworkSecurityGroups`<sup>Required</sup> <a name="CreateNetworkSecurityGroups" id="@cdktf/provider-ionoscloud.group.Group.property.createNetworkSecurityGroups"></a>

```go
func CreateNetworkSecurityGroups() interface{}
```

- *Type:* interface{}

---

##### `CreatePcc`<sup>Required</sup> <a name="CreatePcc" id="@cdktf/provider-ionoscloud.group.Group.property.createPcc"></a>

```go
func CreatePcc() interface{}
```

- *Type:* interface{}

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdktf/provider-ionoscloud.group.Group.property.createSnapshot"></a>

```go
func CreateSnapshot() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.group.Group.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManageDataplatform`<sup>Required</sup> <a name="ManageDataplatform" id="@cdktf/provider-ionoscloud.group.Group.property.manageDataplatform"></a>

```go
func ManageDataplatform() interface{}
```

- *Type:* interface{}

---

##### `ManageDbaas`<sup>Required</sup> <a name="ManageDbaas" id="@cdktf/provider-ionoscloud.group.Group.property.manageDbaas"></a>

```go
func ManageDbaas() interface{}
```

- *Type:* interface{}

---

##### `ManageRegistry`<sup>Required</sup> <a name="ManageRegistry" id="@cdktf/provider-ionoscloud.group.Group.property.manageRegistry"></a>

```go
func ManageRegistry() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.group.Group.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReserveIp`<sup>Required</sup> <a name="ReserveIp" id="@cdktf/provider-ionoscloud.group.Group.property.reserveIp"></a>

```go
func ReserveIp() interface{}
```

- *Type:* interface{}

---

##### `S3Privilege`<sup>Required</sup> <a name="S3Privilege" id="@cdktf/provider-ionoscloud.group.Group.property.s3Privilege"></a>

```go
func S3Privilege() interface{}
```

- *Type:* interface{}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-ionoscloud.group.Group.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `UserIds`<sup>Required</sup> <a name="UserIds" id="@cdktf/provider-ionoscloud.group.Group.property.userIds"></a>

```go
func UserIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.group.Group.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-ionoscloud.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.group.GroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/group"

&group.GroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccessActivityLog: interface{},
	AccessAndManageAiModelHub: interface{},
	AccessAndManageApiGateway: interface{},
	AccessAndManageCdn: interface{},
	AccessAndManageCertificates: interface{},
	AccessAndManageDns: interface{},
	AccessAndManageIamResources: interface{},
	AccessAndManageKaas: interface{},
	AccessAndManageLogging: interface{},
	AccessAndManageMonitoring: interface{},
	AccessAndManageNetworkFileStorage: interface{},
	AccessAndManageVpn: interface{},
	CreateBackupUnit: interface{},
	CreateDatacenter: interface{},
	CreateFlowLog: interface{},
	CreateInternetAccess: interface{},
	CreateK8SCluster: interface{},
	CreateNetworkSecurityGroups: interface{},
	CreatePcc: interface{},
	CreateSnapshot: interface{},
	Id: *string,
	ManageDataplatform: interface{},
	ManageDbaas: interface{},
	ManageRegistry: interface{},
	ReserveIp: interface{},
	S3Privilege: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11.group.GroupTimeouts,
	UserId: *string,
	UserIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#name Group#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessActivityLog">AccessActivityLog</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#access_activity_log Group#access_activity_log}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageAiModelHub">AccessAndManageAiModelHub</a></code> | <code>interface{}</code> | Privilege for a group to access and manage AiModelHub. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageApiGateway">AccessAndManageApiGateway</a></code> | <code>interface{}</code> | Privilege for a group to access and manage ApiGateway. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageCdn">AccessAndManageCdn</a></code> | <code>interface{}</code> | Privilege for a group to access and manage Cdn. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageCertificates">AccessAndManageCertificates</a></code> | <code>interface{}</code> | Privilege for a group to access and manage certificates. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageDns">AccessAndManageDns</a></code> | <code>interface{}</code> | Privilege for a group to access and manage dns records. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageIamResources">AccessAndManageIamResources</a></code> | <code>interface{}</code> | Privilege for a group to access and manage IamResources. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageKaas">AccessAndManageKaas</a></code> | <code>interface{}</code> | Privilege for a group to access and manage Kaas. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageLogging">AccessAndManageLogging</a></code> | <code>interface{}</code> | Privilege for a group to access and manage logging. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageMonitoring">AccessAndManageMonitoring</a></code> | <code>interface{}</code> | Privilege for a group to access and manage monitoring related functionality (access metrics, CRUD on alarms, alarm-actions etc) using Monotoring-as-a-Service (MaaS). |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageNetworkFileStorage">AccessAndManageNetworkFileStorage</a></code> | <code>interface{}</code> | Privilege for a group to access and manage NetworkFileStorage. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageVpn">AccessAndManageVpn</a></code> | <code>interface{}</code> | Privilege for a group to access and manage Vpn. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createBackupUnit">CreateBackupUnit</a></code> | <code>interface{}</code> | Create backup unit privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createDatacenter">CreateDatacenter</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#create_datacenter Group#create_datacenter}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createFlowLog">CreateFlowLog</a></code> | <code>interface{}</code> | Create Flow Logs privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createInternetAccess">CreateInternetAccess</a></code> | <code>interface{}</code> | Create internet access privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createK8SCluster">CreateK8SCluster</a></code> | <code>interface{}</code> | Create Kubernetes cluster privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createNetworkSecurityGroups">CreateNetworkSecurityGroups</a></code> | <code>interface{}</code> | Create Network Security groups. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createPcc">CreatePcc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#create_pcc Group#create_pcc}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createSnapshot">CreateSnapshot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#create_snapshot Group#create_snapshot}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.manageDataplatform">ManageDataplatform</a></code> | <code>interface{}</code> | Privilege for a group to access and manage the Data Platform. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.manageDbaas">ManageDbaas</a></code> | <code>interface{}</code> | Privilege for a group to manage DBaaS related functionality. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.manageRegistry">ManageRegistry</a></code> | <code>interface{}</code> | Privilege for group accessing container registry related functionality. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.reserveIp">ReserveIp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#reserve_ip Group#reserve_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.s3Privilege">S3Privilege</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#s3_privilege Group#s3_privilege}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#user_id Group#user_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.userIds">UserIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#user_ids Group#user_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#name Group#name}.

---

##### `AccessActivityLog`<sup>Optional</sup> <a name="AccessActivityLog" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessActivityLog"></a>

```go
AccessActivityLog interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#access_activity_log Group#access_activity_log}.

---

##### `AccessAndManageAiModelHub`<sup>Optional</sup> <a name="AccessAndManageAiModelHub" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageAiModelHub"></a>

```go
AccessAndManageAiModelHub interface{}
```

- *Type:* interface{}

Privilege for a group to access and manage AiModelHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#access_and_manage_ai_model_hub Group#access_and_manage_ai_model_hub}

---

##### `AccessAndManageApiGateway`<sup>Optional</sup> <a name="AccessAndManageApiGateway" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageApiGateway"></a>

```go
AccessAndManageApiGateway interface{}
```

- *Type:* interface{}

Privilege for a group to access and manage ApiGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#access_and_manage_api_gateway Group#access_and_manage_api_gateway}

---

##### `AccessAndManageCdn`<sup>Optional</sup> <a name="AccessAndManageCdn" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageCdn"></a>

```go
AccessAndManageCdn interface{}
```

- *Type:* interface{}

Privilege for a group to access and manage Cdn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#access_and_manage_cdn Group#access_and_manage_cdn}

---

##### `AccessAndManageCertificates`<sup>Optional</sup> <a name="AccessAndManageCertificates" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageCertificates"></a>

```go
AccessAndManageCertificates interface{}
```

- *Type:* interface{}

Privilege for a group to access and manage certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#access_and_manage_certificates Group#access_and_manage_certificates}

---

##### `AccessAndManageDns`<sup>Optional</sup> <a name="AccessAndManageDns" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageDns"></a>

```go
AccessAndManageDns interface{}
```

- *Type:* interface{}

Privilege for a group to access and manage dns records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#access_and_manage_dns Group#access_and_manage_dns}

---

##### `AccessAndManageIamResources`<sup>Optional</sup> <a name="AccessAndManageIamResources" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageIamResources"></a>

```go
AccessAndManageIamResources interface{}
```

- *Type:* interface{}

Privilege for a group to access and manage IamResources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#access_and_manage_iam_resources Group#access_and_manage_iam_resources}

---

##### `AccessAndManageKaas`<sup>Optional</sup> <a name="AccessAndManageKaas" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageKaas"></a>

```go
AccessAndManageKaas interface{}
```

- *Type:* interface{}

Privilege for a group to access and manage Kaas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#access_and_manage_kaas Group#access_and_manage_kaas}

---

##### `AccessAndManageLogging`<sup>Optional</sup> <a name="AccessAndManageLogging" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageLogging"></a>

```go
AccessAndManageLogging interface{}
```

- *Type:* interface{}

Privilege for a group to access and manage logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#access_and_manage_logging Group#access_and_manage_logging}

---

##### `AccessAndManageMonitoring`<sup>Optional</sup> <a name="AccessAndManageMonitoring" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageMonitoring"></a>

```go
AccessAndManageMonitoring interface{}
```

- *Type:* interface{}

Privilege for a group to access and manage monitoring related functionality (access metrics, CRUD on alarms, alarm-actions etc) using Monotoring-as-a-Service (MaaS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#access_and_manage_monitoring Group#access_and_manage_monitoring}

---

##### `AccessAndManageNetworkFileStorage`<sup>Optional</sup> <a name="AccessAndManageNetworkFileStorage" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageNetworkFileStorage"></a>

```go
AccessAndManageNetworkFileStorage interface{}
```

- *Type:* interface{}

Privilege for a group to access and manage NetworkFileStorage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#access_and_manage_network_file_storage Group#access_and_manage_network_file_storage}

---

##### `AccessAndManageVpn`<sup>Optional</sup> <a name="AccessAndManageVpn" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageVpn"></a>

```go
AccessAndManageVpn interface{}
```

- *Type:* interface{}

Privilege for a group to access and manage Vpn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#access_and_manage_vpn Group#access_and_manage_vpn}

---

##### `CreateBackupUnit`<sup>Optional</sup> <a name="CreateBackupUnit" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createBackupUnit"></a>

```go
CreateBackupUnit interface{}
```

- *Type:* interface{}

Create backup unit privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#create_backup_unit Group#create_backup_unit}

---

##### `CreateDatacenter`<sup>Optional</sup> <a name="CreateDatacenter" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createDatacenter"></a>

```go
CreateDatacenter interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#create_datacenter Group#create_datacenter}.

---

##### `CreateFlowLog`<sup>Optional</sup> <a name="CreateFlowLog" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createFlowLog"></a>

```go
CreateFlowLog interface{}
```

- *Type:* interface{}

Create Flow Logs privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#create_flow_log Group#create_flow_log}

---

##### `CreateInternetAccess`<sup>Optional</sup> <a name="CreateInternetAccess" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createInternetAccess"></a>

```go
CreateInternetAccess interface{}
```

- *Type:* interface{}

Create internet access privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#create_internet_access Group#create_internet_access}

---

##### `CreateK8SCluster`<sup>Optional</sup> <a name="CreateK8SCluster" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createK8SCluster"></a>

```go
CreateK8SCluster interface{}
```

- *Type:* interface{}

Create Kubernetes cluster privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#create_k8s_cluster Group#create_k8s_cluster}

---

##### `CreateNetworkSecurityGroups`<sup>Optional</sup> <a name="CreateNetworkSecurityGroups" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createNetworkSecurityGroups"></a>

```go
CreateNetworkSecurityGroups interface{}
```

- *Type:* interface{}

Create Network Security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#create_network_security_groups Group#create_network_security_groups}

---

##### `CreatePcc`<sup>Optional</sup> <a name="CreatePcc" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createPcc"></a>

```go
CreatePcc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#create_pcc Group#create_pcc}.

---

##### `CreateSnapshot`<sup>Optional</sup> <a name="CreateSnapshot" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createSnapshot"></a>

```go
CreateSnapshot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#create_snapshot Group#create_snapshot}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManageDataplatform`<sup>Optional</sup> <a name="ManageDataplatform" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.manageDataplatform"></a>

```go
ManageDataplatform interface{}
```

- *Type:* interface{}

Privilege for a group to access and manage the Data Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#manage_dataplatform Group#manage_dataplatform}

---

##### `ManageDbaas`<sup>Optional</sup> <a name="ManageDbaas" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.manageDbaas"></a>

```go
ManageDbaas interface{}
```

- *Type:* interface{}

Privilege for a group to manage DBaaS related functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#manage_dbaas Group#manage_dbaas}

---

##### `ManageRegistry`<sup>Optional</sup> <a name="ManageRegistry" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.manageRegistry"></a>

```go
ManageRegistry interface{}
```

- *Type:* interface{}

Privilege for group accessing container registry related functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#manage_registry Group#manage_registry}

---

##### `ReserveIp`<sup>Optional</sup> <a name="ReserveIp" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.reserveIp"></a>

```go
ReserveIp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#reserve_ip Group#reserve_ip}.

---

##### `S3Privilege`<sup>Optional</sup> <a name="S3Privilege" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.s3Privilege"></a>

```go
S3Privilege interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#s3_privilege Group#s3_privilege}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.timeouts"></a>

```go
Timeouts GroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#timeouts Group#timeouts}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#user_id Group#user_id}.

---

##### `UserIds`<sup>Optional</sup> <a name="UserIds" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.userIds"></a>

```go
UserIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#user_ids Group#user_ids}.

---

### GroupTimeouts <a name="GroupTimeouts" id="@cdktf/provider-ionoscloud.group.GroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/group"

&group.GroupTimeouts {
	Create: *string,
	Default: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#create Group#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#default Group#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#delete Group#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#update Group#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#create Group#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#default Group#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#delete Group#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.5/docs/resources/group#update Group#update}.

---

### GroupUsers <a name="GroupUsers" id="@cdktf/provider-ionoscloud.group.GroupUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.group.GroupUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/group"

&group.GroupUsers {

}
```


## Classes <a name="Classes" id="Classes"></a>

### GroupTimeoutsOutputReference <a name="GroupTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/group"

group.NewGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroupUsersList <a name="GroupUsersList" id="@cdktf/provider-ionoscloud.group.GroupUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/group"

group.NewGroupUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GroupUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.group.GroupUsersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.group.GroupUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.group.GroupUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.group.GroupUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.group.GroupUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.group.GroupUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.group.GroupUsersList.get"></a>

```go
func Get(index *f64) GroupUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.group.GroupUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.group.GroupUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.group.GroupUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GroupUsersOutputReference <a name="GroupUsersOutputReference" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-ionoscloud-go/ionoscloud/v11/group"

group.NewGroupUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GroupUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.administrator">Administrator</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.forceSecAuth">ForceSecAuth</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsers">GroupUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Administrator`<sup>Required</sup> <a name="Administrator" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.administrator"></a>

```go
func Administrator() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `ForceSecAuth`<sup>Required</sup> <a name="ForceSecAuth" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.forceSecAuth"></a>

```go
func ForceSecAuth() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() GroupUsers
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupUsers">GroupUsers</a>

---



