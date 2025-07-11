# `group` Submodule <a name="`group` Submodule" id="@cdktf/provider-ionoscloud.group"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Group <a name="Group" id="@cdktf/provider-ionoscloud.group.Group"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group ionoscloud_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.group.Group.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new Group(Construct Scope, string Id, GroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig">GroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.group.Group.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.group.Group.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.group.Group.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.group.Group.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.group.Group.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.group.Group.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.group.Group.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.group.Group.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.group.Group.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.group.Group.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.group.Group.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.group.Group.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.group.Group.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.group.Group.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.group.Group.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.group.Group.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.group.Group.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.group.Group.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.group.Group.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.group.Group.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.group.Group.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.group.Group.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.group.Group.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.Group.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.group.Group.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.group.Group.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.group.Group.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.group.Group.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.group.Group.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.group.Group.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.group.Group.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.group.Group.putTimeouts"></a>

```csharp
private void PutTimeouts(GroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.group.Group.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a>

---

##### `ResetAccessActivityLog` <a name="ResetAccessActivityLog" id="@cdktf/provider-ionoscloud.group.Group.resetAccessActivityLog"></a>

```csharp
private void ResetAccessActivityLog()
```

##### `ResetAccessAndManageAiModelHub` <a name="ResetAccessAndManageAiModelHub" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageAiModelHub"></a>

```csharp
private void ResetAccessAndManageAiModelHub()
```

##### `ResetAccessAndManageApiGateway` <a name="ResetAccessAndManageApiGateway" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageApiGateway"></a>

```csharp
private void ResetAccessAndManageApiGateway()
```

##### `ResetAccessAndManageCdn` <a name="ResetAccessAndManageCdn" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageCdn"></a>

```csharp
private void ResetAccessAndManageCdn()
```

##### `ResetAccessAndManageCertificates` <a name="ResetAccessAndManageCertificates" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageCertificates"></a>

```csharp
private void ResetAccessAndManageCertificates()
```

##### `ResetAccessAndManageDns` <a name="ResetAccessAndManageDns" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageDns"></a>

```csharp
private void ResetAccessAndManageDns()
```

##### `ResetAccessAndManageIamResources` <a name="ResetAccessAndManageIamResources" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageIamResources"></a>

```csharp
private void ResetAccessAndManageIamResources()
```

##### `ResetAccessAndManageKaas` <a name="ResetAccessAndManageKaas" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageKaas"></a>

```csharp
private void ResetAccessAndManageKaas()
```

##### `ResetAccessAndManageLogging` <a name="ResetAccessAndManageLogging" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageLogging"></a>

```csharp
private void ResetAccessAndManageLogging()
```

##### `ResetAccessAndManageMonitoring` <a name="ResetAccessAndManageMonitoring" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageMonitoring"></a>

```csharp
private void ResetAccessAndManageMonitoring()
```

##### `ResetAccessAndManageNetworkFileStorage` <a name="ResetAccessAndManageNetworkFileStorage" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageNetworkFileStorage"></a>

```csharp
private void ResetAccessAndManageNetworkFileStorage()
```

##### `ResetAccessAndManageVpn` <a name="ResetAccessAndManageVpn" id="@cdktf/provider-ionoscloud.group.Group.resetAccessAndManageVpn"></a>

```csharp
private void ResetAccessAndManageVpn()
```

##### `ResetCreateBackupUnit` <a name="ResetCreateBackupUnit" id="@cdktf/provider-ionoscloud.group.Group.resetCreateBackupUnit"></a>

```csharp
private void ResetCreateBackupUnit()
```

##### `ResetCreateDatacenter` <a name="ResetCreateDatacenter" id="@cdktf/provider-ionoscloud.group.Group.resetCreateDatacenter"></a>

```csharp
private void ResetCreateDatacenter()
```

##### `ResetCreateFlowLog` <a name="ResetCreateFlowLog" id="@cdktf/provider-ionoscloud.group.Group.resetCreateFlowLog"></a>

```csharp
private void ResetCreateFlowLog()
```

##### `ResetCreateInternetAccess` <a name="ResetCreateInternetAccess" id="@cdktf/provider-ionoscloud.group.Group.resetCreateInternetAccess"></a>

```csharp
private void ResetCreateInternetAccess()
```

##### `ResetCreateK8SCluster` <a name="ResetCreateK8SCluster" id="@cdktf/provider-ionoscloud.group.Group.resetCreateK8SCluster"></a>

```csharp
private void ResetCreateK8SCluster()
```

##### `ResetCreateNetworkSecurityGroups` <a name="ResetCreateNetworkSecurityGroups" id="@cdktf/provider-ionoscloud.group.Group.resetCreateNetworkSecurityGroups"></a>

```csharp
private void ResetCreateNetworkSecurityGroups()
```

##### `ResetCreatePcc` <a name="ResetCreatePcc" id="@cdktf/provider-ionoscloud.group.Group.resetCreatePcc"></a>

```csharp
private void ResetCreatePcc()
```

##### `ResetCreateSnapshot` <a name="ResetCreateSnapshot" id="@cdktf/provider-ionoscloud.group.Group.resetCreateSnapshot"></a>

```csharp
private void ResetCreateSnapshot()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.group.Group.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManageDataplatform` <a name="ResetManageDataplatform" id="@cdktf/provider-ionoscloud.group.Group.resetManageDataplatform"></a>

```csharp
private void ResetManageDataplatform()
```

##### `ResetManageDbaas` <a name="ResetManageDbaas" id="@cdktf/provider-ionoscloud.group.Group.resetManageDbaas"></a>

```csharp
private void ResetManageDbaas()
```

##### `ResetManageRegistry` <a name="ResetManageRegistry" id="@cdktf/provider-ionoscloud.group.Group.resetManageRegistry"></a>

```csharp
private void ResetManageRegistry()
```

##### `ResetReserveIp` <a name="ResetReserveIp" id="@cdktf/provider-ionoscloud.group.Group.resetReserveIp"></a>

```csharp
private void ResetReserveIp()
```

##### `ResetS3Privilege` <a name="ResetS3Privilege" id="@cdktf/provider-ionoscloud.group.Group.resetS3Privilege"></a>

```csharp
private void ResetS3Privilege()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.group.Group.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-ionoscloud.group.Group.resetUserId"></a>

```csharp
private void ResetUserId()
```

##### `ResetUserIds` <a name="ResetUserIds" id="@cdktf/provider-ionoscloud.group.Group.resetUserIds"></a>

```csharp
private void ResetUserIds()
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

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

Group.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.group.Group.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.group.Group.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

Group.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.group.Group.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.group.Group.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

Group.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.group.Group.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

Group.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Group to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Group that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.group.Group.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Group to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference">GroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.users">Users</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList">GroupUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessActivityLogInput">AccessActivityLogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageAiModelHubInput">AccessAndManageAiModelHubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageApiGatewayInput">AccessAndManageApiGatewayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCdnInput">AccessAndManageCdnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCertificatesInput">AccessAndManageCertificatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageDnsInput">AccessAndManageDnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageIamResourcesInput">AccessAndManageIamResourcesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageKaasInput">AccessAndManageKaasInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageLoggingInput">AccessAndManageLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageMonitoringInput">AccessAndManageMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageNetworkFileStorageInput">AccessAndManageNetworkFileStorageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageVpnInput">AccessAndManageVpnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createBackupUnitInput">CreateBackupUnitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createDatacenterInput">CreateDatacenterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createFlowLogInput">CreateFlowLogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createInternetAccessInput">CreateInternetAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createK8SClusterInput">CreateK8SClusterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createNetworkSecurityGroupsInput">CreateNetworkSecurityGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createPccInput">CreatePccInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createSnapshotInput">CreateSnapshotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageDataplatformInput">ManageDataplatformInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageDbaasInput">ManageDbaasInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageRegistryInput">ManageRegistryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.reserveIpInput">ReserveIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.s3PrivilegeInput">S3PrivilegeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.userIdsInput">UserIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessActivityLog">AccessActivityLog</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageAiModelHub">AccessAndManageAiModelHub</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageApiGateway">AccessAndManageApiGateway</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCdn">AccessAndManageCdn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCertificates">AccessAndManageCertificates</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageDns">AccessAndManageDns</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageIamResources">AccessAndManageIamResources</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageKaas">AccessAndManageKaas</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageLogging">AccessAndManageLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageMonitoring">AccessAndManageMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageNetworkFileStorage">AccessAndManageNetworkFileStorage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.accessAndManageVpn">AccessAndManageVpn</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createBackupUnit">CreateBackupUnit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createDatacenter">CreateDatacenter</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createFlowLog">CreateFlowLog</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createInternetAccess">CreateInternetAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createK8SCluster">CreateK8SCluster</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createNetworkSecurityGroups">CreateNetworkSecurityGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createPcc">CreatePcc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.createSnapshot">CreateSnapshot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageDataplatform">ManageDataplatform</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageDbaas">ManageDbaas</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.manageRegistry">ManageRegistry</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.reserveIp">ReserveIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.s3Privilege">S3Privilege</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.userIds">UserIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.group.Group.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.group.Group.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.group.Group.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.group.Group.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.group.Group.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.group.Group.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.group.Group.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.group.Group.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.group.Group.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.group.Group.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.group.Group.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.group.Group.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.group.Group.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.group.Group.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.group.Group.property.timeouts"></a>

```csharp
public GroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference">GroupTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-ionoscloud.group.Group.property.users"></a>

```csharp
public GroupUsersList Users { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupUsersList">GroupUsersList</a>

---

##### `AccessActivityLogInput`<sup>Optional</sup> <a name="AccessActivityLogInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessActivityLogInput"></a>

```csharp
public object AccessActivityLogInput { get; }
```

- *Type:* object

---

##### `AccessAndManageAiModelHubInput`<sup>Optional</sup> <a name="AccessAndManageAiModelHubInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageAiModelHubInput"></a>

```csharp
public object AccessAndManageAiModelHubInput { get; }
```

- *Type:* object

---

##### `AccessAndManageApiGatewayInput`<sup>Optional</sup> <a name="AccessAndManageApiGatewayInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageApiGatewayInput"></a>

```csharp
public object AccessAndManageApiGatewayInput { get; }
```

- *Type:* object

---

##### `AccessAndManageCdnInput`<sup>Optional</sup> <a name="AccessAndManageCdnInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCdnInput"></a>

```csharp
public object AccessAndManageCdnInput { get; }
```

- *Type:* object

---

##### `AccessAndManageCertificatesInput`<sup>Optional</sup> <a name="AccessAndManageCertificatesInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCertificatesInput"></a>

```csharp
public object AccessAndManageCertificatesInput { get; }
```

- *Type:* object

---

##### `AccessAndManageDnsInput`<sup>Optional</sup> <a name="AccessAndManageDnsInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageDnsInput"></a>

```csharp
public object AccessAndManageDnsInput { get; }
```

- *Type:* object

---

##### `AccessAndManageIamResourcesInput`<sup>Optional</sup> <a name="AccessAndManageIamResourcesInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageIamResourcesInput"></a>

```csharp
public object AccessAndManageIamResourcesInput { get; }
```

- *Type:* object

---

##### `AccessAndManageKaasInput`<sup>Optional</sup> <a name="AccessAndManageKaasInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageKaasInput"></a>

```csharp
public object AccessAndManageKaasInput { get; }
```

- *Type:* object

---

##### `AccessAndManageLoggingInput`<sup>Optional</sup> <a name="AccessAndManageLoggingInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageLoggingInput"></a>

```csharp
public object AccessAndManageLoggingInput { get; }
```

- *Type:* object

---

##### `AccessAndManageMonitoringInput`<sup>Optional</sup> <a name="AccessAndManageMonitoringInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageMonitoringInput"></a>

```csharp
public object AccessAndManageMonitoringInput { get; }
```

- *Type:* object

---

##### `AccessAndManageNetworkFileStorageInput`<sup>Optional</sup> <a name="AccessAndManageNetworkFileStorageInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageNetworkFileStorageInput"></a>

```csharp
public object AccessAndManageNetworkFileStorageInput { get; }
```

- *Type:* object

---

##### `AccessAndManageVpnInput`<sup>Optional</sup> <a name="AccessAndManageVpnInput" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageVpnInput"></a>

```csharp
public object AccessAndManageVpnInput { get; }
```

- *Type:* object

---

##### `CreateBackupUnitInput`<sup>Optional</sup> <a name="CreateBackupUnitInput" id="@cdktf/provider-ionoscloud.group.Group.property.createBackupUnitInput"></a>

```csharp
public object CreateBackupUnitInput { get; }
```

- *Type:* object

---

##### `CreateDatacenterInput`<sup>Optional</sup> <a name="CreateDatacenterInput" id="@cdktf/provider-ionoscloud.group.Group.property.createDatacenterInput"></a>

```csharp
public object CreateDatacenterInput { get; }
```

- *Type:* object

---

##### `CreateFlowLogInput`<sup>Optional</sup> <a name="CreateFlowLogInput" id="@cdktf/provider-ionoscloud.group.Group.property.createFlowLogInput"></a>

```csharp
public object CreateFlowLogInput { get; }
```

- *Type:* object

---

##### `CreateInternetAccessInput`<sup>Optional</sup> <a name="CreateInternetAccessInput" id="@cdktf/provider-ionoscloud.group.Group.property.createInternetAccessInput"></a>

```csharp
public object CreateInternetAccessInput { get; }
```

- *Type:* object

---

##### `CreateK8SClusterInput`<sup>Optional</sup> <a name="CreateK8SClusterInput" id="@cdktf/provider-ionoscloud.group.Group.property.createK8SClusterInput"></a>

```csharp
public object CreateK8SClusterInput { get; }
```

- *Type:* object

---

##### `CreateNetworkSecurityGroupsInput`<sup>Optional</sup> <a name="CreateNetworkSecurityGroupsInput" id="@cdktf/provider-ionoscloud.group.Group.property.createNetworkSecurityGroupsInput"></a>

```csharp
public object CreateNetworkSecurityGroupsInput { get; }
```

- *Type:* object

---

##### `CreatePccInput`<sup>Optional</sup> <a name="CreatePccInput" id="@cdktf/provider-ionoscloud.group.Group.property.createPccInput"></a>

```csharp
public object CreatePccInput { get; }
```

- *Type:* object

---

##### `CreateSnapshotInput`<sup>Optional</sup> <a name="CreateSnapshotInput" id="@cdktf/provider-ionoscloud.group.Group.property.createSnapshotInput"></a>

```csharp
public object CreateSnapshotInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.group.Group.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManageDataplatformInput`<sup>Optional</sup> <a name="ManageDataplatformInput" id="@cdktf/provider-ionoscloud.group.Group.property.manageDataplatformInput"></a>

```csharp
public object ManageDataplatformInput { get; }
```

- *Type:* object

---

##### `ManageDbaasInput`<sup>Optional</sup> <a name="ManageDbaasInput" id="@cdktf/provider-ionoscloud.group.Group.property.manageDbaasInput"></a>

```csharp
public object ManageDbaasInput { get; }
```

- *Type:* object

---

##### `ManageRegistryInput`<sup>Optional</sup> <a name="ManageRegistryInput" id="@cdktf/provider-ionoscloud.group.Group.property.manageRegistryInput"></a>

```csharp
public object ManageRegistryInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.group.Group.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReserveIpInput`<sup>Optional</sup> <a name="ReserveIpInput" id="@cdktf/provider-ionoscloud.group.Group.property.reserveIpInput"></a>

```csharp
public object ReserveIpInput { get; }
```

- *Type:* object

---

##### `S3PrivilegeInput`<sup>Optional</sup> <a name="S3PrivilegeInput" id="@cdktf/provider-ionoscloud.group.Group.property.s3PrivilegeInput"></a>

```csharp
public object S3PrivilegeInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.group.Group.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-ionoscloud.group.Group.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `UserIdsInput`<sup>Optional</sup> <a name="UserIdsInput" id="@cdktf/provider-ionoscloud.group.Group.property.userIdsInput"></a>

```csharp
public string[] UserIdsInput { get; }
```

- *Type:* string[]

---

##### `AccessActivityLog`<sup>Required</sup> <a name="AccessActivityLog" id="@cdktf/provider-ionoscloud.group.Group.property.accessActivityLog"></a>

```csharp
public object AccessActivityLog { get; }
```

- *Type:* object

---

##### `AccessAndManageAiModelHub`<sup>Required</sup> <a name="AccessAndManageAiModelHub" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageAiModelHub"></a>

```csharp
public object AccessAndManageAiModelHub { get; }
```

- *Type:* object

---

##### `AccessAndManageApiGateway`<sup>Required</sup> <a name="AccessAndManageApiGateway" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageApiGateway"></a>

```csharp
public object AccessAndManageApiGateway { get; }
```

- *Type:* object

---

##### `AccessAndManageCdn`<sup>Required</sup> <a name="AccessAndManageCdn" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCdn"></a>

```csharp
public object AccessAndManageCdn { get; }
```

- *Type:* object

---

##### `AccessAndManageCertificates`<sup>Required</sup> <a name="AccessAndManageCertificates" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageCertificates"></a>

```csharp
public object AccessAndManageCertificates { get; }
```

- *Type:* object

---

##### `AccessAndManageDns`<sup>Required</sup> <a name="AccessAndManageDns" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageDns"></a>

```csharp
public object AccessAndManageDns { get; }
```

- *Type:* object

---

##### `AccessAndManageIamResources`<sup>Required</sup> <a name="AccessAndManageIamResources" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageIamResources"></a>

```csharp
public object AccessAndManageIamResources { get; }
```

- *Type:* object

---

##### `AccessAndManageKaas`<sup>Required</sup> <a name="AccessAndManageKaas" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageKaas"></a>

```csharp
public object AccessAndManageKaas { get; }
```

- *Type:* object

---

##### `AccessAndManageLogging`<sup>Required</sup> <a name="AccessAndManageLogging" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageLogging"></a>

```csharp
public object AccessAndManageLogging { get; }
```

- *Type:* object

---

##### `AccessAndManageMonitoring`<sup>Required</sup> <a name="AccessAndManageMonitoring" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageMonitoring"></a>

```csharp
public object AccessAndManageMonitoring { get; }
```

- *Type:* object

---

##### `AccessAndManageNetworkFileStorage`<sup>Required</sup> <a name="AccessAndManageNetworkFileStorage" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageNetworkFileStorage"></a>

```csharp
public object AccessAndManageNetworkFileStorage { get; }
```

- *Type:* object

---

##### `AccessAndManageVpn`<sup>Required</sup> <a name="AccessAndManageVpn" id="@cdktf/provider-ionoscloud.group.Group.property.accessAndManageVpn"></a>

```csharp
public object AccessAndManageVpn { get; }
```

- *Type:* object

---

##### `CreateBackupUnit`<sup>Required</sup> <a name="CreateBackupUnit" id="@cdktf/provider-ionoscloud.group.Group.property.createBackupUnit"></a>

```csharp
public object CreateBackupUnit { get; }
```

- *Type:* object

---

##### `CreateDatacenter`<sup>Required</sup> <a name="CreateDatacenter" id="@cdktf/provider-ionoscloud.group.Group.property.createDatacenter"></a>

```csharp
public object CreateDatacenter { get; }
```

- *Type:* object

---

##### `CreateFlowLog`<sup>Required</sup> <a name="CreateFlowLog" id="@cdktf/provider-ionoscloud.group.Group.property.createFlowLog"></a>

```csharp
public object CreateFlowLog { get; }
```

- *Type:* object

---

##### `CreateInternetAccess`<sup>Required</sup> <a name="CreateInternetAccess" id="@cdktf/provider-ionoscloud.group.Group.property.createInternetAccess"></a>

```csharp
public object CreateInternetAccess { get; }
```

- *Type:* object

---

##### `CreateK8SCluster`<sup>Required</sup> <a name="CreateK8SCluster" id="@cdktf/provider-ionoscloud.group.Group.property.createK8SCluster"></a>

```csharp
public object CreateK8SCluster { get; }
```

- *Type:* object

---

##### `CreateNetworkSecurityGroups`<sup>Required</sup> <a name="CreateNetworkSecurityGroups" id="@cdktf/provider-ionoscloud.group.Group.property.createNetworkSecurityGroups"></a>

```csharp
public object CreateNetworkSecurityGroups { get; }
```

- *Type:* object

---

##### `CreatePcc`<sup>Required</sup> <a name="CreatePcc" id="@cdktf/provider-ionoscloud.group.Group.property.createPcc"></a>

```csharp
public object CreatePcc { get; }
```

- *Type:* object

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdktf/provider-ionoscloud.group.Group.property.createSnapshot"></a>

```csharp
public object CreateSnapshot { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.group.Group.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManageDataplatform`<sup>Required</sup> <a name="ManageDataplatform" id="@cdktf/provider-ionoscloud.group.Group.property.manageDataplatform"></a>

```csharp
public object ManageDataplatform { get; }
```

- *Type:* object

---

##### `ManageDbaas`<sup>Required</sup> <a name="ManageDbaas" id="@cdktf/provider-ionoscloud.group.Group.property.manageDbaas"></a>

```csharp
public object ManageDbaas { get; }
```

- *Type:* object

---

##### `ManageRegistry`<sup>Required</sup> <a name="ManageRegistry" id="@cdktf/provider-ionoscloud.group.Group.property.manageRegistry"></a>

```csharp
public object ManageRegistry { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.group.Group.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReserveIp`<sup>Required</sup> <a name="ReserveIp" id="@cdktf/provider-ionoscloud.group.Group.property.reserveIp"></a>

```csharp
public object ReserveIp { get; }
```

- *Type:* object

---

##### `S3Privilege`<sup>Required</sup> <a name="S3Privilege" id="@cdktf/provider-ionoscloud.group.Group.property.s3Privilege"></a>

```csharp
public object S3Privilege { get; }
```

- *Type:* object

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-ionoscloud.group.Group.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `UserIds`<sup>Required</sup> <a name="UserIds" id="@cdktf/provider-ionoscloud.group.Group.property.userIds"></a>

```csharp
public string[] UserIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.Group.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.group.Group.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroupConfig <a name="GroupConfig" id="@cdktf/provider-ionoscloud.group.GroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.group.GroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new GroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    object AccessActivityLog = null,
    object AccessAndManageAiModelHub = null,
    object AccessAndManageApiGateway = null,
    object AccessAndManageCdn = null,
    object AccessAndManageCertificates = null,
    object AccessAndManageDns = null,
    object AccessAndManageIamResources = null,
    object AccessAndManageKaas = null,
    object AccessAndManageLogging = null,
    object AccessAndManageMonitoring = null,
    object AccessAndManageNetworkFileStorage = null,
    object AccessAndManageVpn = null,
    object CreateBackupUnit = null,
    object CreateDatacenter = null,
    object CreateFlowLog = null,
    object CreateInternetAccess = null,
    object CreateK8SCluster = null,
    object CreateNetworkSecurityGroups = null,
    object CreatePcc = null,
    object CreateSnapshot = null,
    string Id = null,
    object ManageDataplatform = null,
    object ManageDbaas = null,
    object ManageRegistry = null,
    object ReserveIp = null,
    object S3Privilege = null,
    GroupTimeouts Timeouts = null,
    string UserId = null,
    string[] UserIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#name Group#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessActivityLog">AccessActivityLog</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_activity_log Group#access_activity_log}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageAiModelHub">AccessAndManageAiModelHub</a></code> | <code>object</code> | Privilege for a group to access and manage AiModelHub. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageApiGateway">AccessAndManageApiGateway</a></code> | <code>object</code> | Privilege for a group to access and manage ApiGateway. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageCdn">AccessAndManageCdn</a></code> | <code>object</code> | Privilege for a group to access and manage Cdn. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageCertificates">AccessAndManageCertificates</a></code> | <code>object</code> | Privilege for a group to access and manage certificates. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageDns">AccessAndManageDns</a></code> | <code>object</code> | Privilege for a group to access and manage dns records. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageIamResources">AccessAndManageIamResources</a></code> | <code>object</code> | Privilege for a group to access and manage IamResources. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageKaas">AccessAndManageKaas</a></code> | <code>object</code> | Privilege for a group to access and manage Kaas. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageLogging">AccessAndManageLogging</a></code> | <code>object</code> | Privilege for a group to access and manage logging. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageMonitoring">AccessAndManageMonitoring</a></code> | <code>object</code> | Privilege for a group to access and manage monitoring related functionality (access metrics, CRUD on alarms, alarm-actions etc) using Monotoring-as-a-Service (MaaS). |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageNetworkFileStorage">AccessAndManageNetworkFileStorage</a></code> | <code>object</code> | Privilege for a group to access and manage NetworkFileStorage. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageVpn">AccessAndManageVpn</a></code> | <code>object</code> | Privilege for a group to access and manage Vpn. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createBackupUnit">CreateBackupUnit</a></code> | <code>object</code> | Create backup unit privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createDatacenter">CreateDatacenter</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_datacenter Group#create_datacenter}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createFlowLog">CreateFlowLog</a></code> | <code>object</code> | Create Flow Logs privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createInternetAccess">CreateInternetAccess</a></code> | <code>object</code> | Create internet access privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createK8SCluster">CreateK8SCluster</a></code> | <code>object</code> | Create Kubernetes cluster privilege. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createNetworkSecurityGroups">CreateNetworkSecurityGroups</a></code> | <code>object</code> | Create Network Security groups. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createPcc">CreatePcc</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_pcc Group#create_pcc}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.createSnapshot">CreateSnapshot</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_snapshot Group#create_snapshot}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#id Group#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.manageDataplatform">ManageDataplatform</a></code> | <code>object</code> | Privilege for a group to access and manage the Data Platform. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.manageDbaas">ManageDbaas</a></code> | <code>object</code> | Privilege for a group to manage DBaaS related functionality. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.manageRegistry">ManageRegistry</a></code> | <code>object</code> | Privilege for group accessing container registry related functionality. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.reserveIp">ReserveIp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#reserve_ip Group#reserve_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.s3Privilege">S3Privilege</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#s3_privilege Group#s3_privilege}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#user_id Group#user_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupConfig.property.userIds">UserIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#user_ids Group#user_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#name Group#name}.

---

##### `AccessActivityLog`<sup>Optional</sup> <a name="AccessActivityLog" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessActivityLog"></a>

```csharp
public object AccessActivityLog { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_activity_log Group#access_activity_log}.

---

##### `AccessAndManageAiModelHub`<sup>Optional</sup> <a name="AccessAndManageAiModelHub" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageAiModelHub"></a>

```csharp
public object AccessAndManageAiModelHub { get; set; }
```

- *Type:* object

Privilege for a group to access and manage AiModelHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_ai_model_hub Group#access_and_manage_ai_model_hub}

---

##### `AccessAndManageApiGateway`<sup>Optional</sup> <a name="AccessAndManageApiGateway" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageApiGateway"></a>

```csharp
public object AccessAndManageApiGateway { get; set; }
```

- *Type:* object

Privilege for a group to access and manage ApiGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_api_gateway Group#access_and_manage_api_gateway}

---

##### `AccessAndManageCdn`<sup>Optional</sup> <a name="AccessAndManageCdn" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageCdn"></a>

```csharp
public object AccessAndManageCdn { get; set; }
```

- *Type:* object

Privilege for a group to access and manage Cdn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_cdn Group#access_and_manage_cdn}

---

##### `AccessAndManageCertificates`<sup>Optional</sup> <a name="AccessAndManageCertificates" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageCertificates"></a>

```csharp
public object AccessAndManageCertificates { get; set; }
```

- *Type:* object

Privilege for a group to access and manage certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_certificates Group#access_and_manage_certificates}

---

##### `AccessAndManageDns`<sup>Optional</sup> <a name="AccessAndManageDns" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageDns"></a>

```csharp
public object AccessAndManageDns { get; set; }
```

- *Type:* object

Privilege for a group to access and manage dns records.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_dns Group#access_and_manage_dns}

---

##### `AccessAndManageIamResources`<sup>Optional</sup> <a name="AccessAndManageIamResources" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageIamResources"></a>

```csharp
public object AccessAndManageIamResources { get; set; }
```

- *Type:* object

Privilege for a group to access and manage IamResources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_iam_resources Group#access_and_manage_iam_resources}

---

##### `AccessAndManageKaas`<sup>Optional</sup> <a name="AccessAndManageKaas" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageKaas"></a>

```csharp
public object AccessAndManageKaas { get; set; }
```

- *Type:* object

Privilege for a group to access and manage Kaas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_kaas Group#access_and_manage_kaas}

---

##### `AccessAndManageLogging`<sup>Optional</sup> <a name="AccessAndManageLogging" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageLogging"></a>

```csharp
public object AccessAndManageLogging { get; set; }
```

- *Type:* object

Privilege for a group to access and manage logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_logging Group#access_and_manage_logging}

---

##### `AccessAndManageMonitoring`<sup>Optional</sup> <a name="AccessAndManageMonitoring" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageMonitoring"></a>

```csharp
public object AccessAndManageMonitoring { get; set; }
```

- *Type:* object

Privilege for a group to access and manage monitoring related functionality (access metrics, CRUD on alarms, alarm-actions etc) using Monotoring-as-a-Service (MaaS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_monitoring Group#access_and_manage_monitoring}

---

##### `AccessAndManageNetworkFileStorage`<sup>Optional</sup> <a name="AccessAndManageNetworkFileStorage" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageNetworkFileStorage"></a>

```csharp
public object AccessAndManageNetworkFileStorage { get; set; }
```

- *Type:* object

Privilege for a group to access and manage NetworkFileStorage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_network_file_storage Group#access_and_manage_network_file_storage}

---

##### `AccessAndManageVpn`<sup>Optional</sup> <a name="AccessAndManageVpn" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.accessAndManageVpn"></a>

```csharp
public object AccessAndManageVpn { get; set; }
```

- *Type:* object

Privilege for a group to access and manage Vpn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#access_and_manage_vpn Group#access_and_manage_vpn}

---

##### `CreateBackupUnit`<sup>Optional</sup> <a name="CreateBackupUnit" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createBackupUnit"></a>

```csharp
public object CreateBackupUnit { get; set; }
```

- *Type:* object

Create backup unit privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_backup_unit Group#create_backup_unit}

---

##### `CreateDatacenter`<sup>Optional</sup> <a name="CreateDatacenter" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createDatacenter"></a>

```csharp
public object CreateDatacenter { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_datacenter Group#create_datacenter}.

---

##### `CreateFlowLog`<sup>Optional</sup> <a name="CreateFlowLog" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createFlowLog"></a>

```csharp
public object CreateFlowLog { get; set; }
```

- *Type:* object

Create Flow Logs privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_flow_log Group#create_flow_log}

---

##### `CreateInternetAccess`<sup>Optional</sup> <a name="CreateInternetAccess" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createInternetAccess"></a>

```csharp
public object CreateInternetAccess { get; set; }
```

- *Type:* object

Create internet access privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_internet_access Group#create_internet_access}

---

##### `CreateK8SCluster`<sup>Optional</sup> <a name="CreateK8SCluster" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createK8SCluster"></a>

```csharp
public object CreateK8SCluster { get; set; }
```

- *Type:* object

Create Kubernetes cluster privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_k8s_cluster Group#create_k8s_cluster}

---

##### `CreateNetworkSecurityGroups`<sup>Optional</sup> <a name="CreateNetworkSecurityGroups" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createNetworkSecurityGroups"></a>

```csharp
public object CreateNetworkSecurityGroups { get; set; }
```

- *Type:* object

Create Network Security groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_network_security_groups Group#create_network_security_groups}

---

##### `CreatePcc`<sup>Optional</sup> <a name="CreatePcc" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createPcc"></a>

```csharp
public object CreatePcc { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_pcc Group#create_pcc}.

---

##### `CreateSnapshot`<sup>Optional</sup> <a name="CreateSnapshot" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.createSnapshot"></a>

```csharp
public object CreateSnapshot { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create_snapshot Group#create_snapshot}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#id Group#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManageDataplatform`<sup>Optional</sup> <a name="ManageDataplatform" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.manageDataplatform"></a>

```csharp
public object ManageDataplatform { get; set; }
```

- *Type:* object

Privilege for a group to access and manage the Data Platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#manage_dataplatform Group#manage_dataplatform}

---

##### `ManageDbaas`<sup>Optional</sup> <a name="ManageDbaas" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.manageDbaas"></a>

```csharp
public object ManageDbaas { get; set; }
```

- *Type:* object

Privilege for a group to manage DBaaS related functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#manage_dbaas Group#manage_dbaas}

---

##### `ManageRegistry`<sup>Optional</sup> <a name="ManageRegistry" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.manageRegistry"></a>

```csharp
public object ManageRegistry { get; set; }
```

- *Type:* object

Privilege for group accessing container registry related functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#manage_registry Group#manage_registry}

---

##### `ReserveIp`<sup>Optional</sup> <a name="ReserveIp" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.reserveIp"></a>

```csharp
public object ReserveIp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#reserve_ip Group#reserve_ip}.

---

##### `S3Privilege`<sup>Optional</sup> <a name="S3Privilege" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.s3Privilege"></a>

```csharp
public object S3Privilege { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#s3_privilege Group#s3_privilege}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.timeouts"></a>

```csharp
public GroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts">GroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#timeouts Group#timeouts}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#user_id Group#user_id}.

---

##### `UserIds`<sup>Optional</sup> <a name="UserIds" id="@cdktf/provider-ionoscloud.group.GroupConfig.property.userIds"></a>

```csharp
public string[] UserIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#user_ids Group#user_ids}.

---

### GroupTimeouts <a name="GroupTimeouts" id="@cdktf/provider-ionoscloud.group.GroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new GroupTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create Group#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#default Group#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#delete Group#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#update Group#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#create Group#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#default Group#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#delete Group#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.group.GroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.11/docs/resources/group#update Group#update}.

---

### GroupUsers <a name="GroupUsers" id="@cdktf/provider-ionoscloud.group.GroupUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.group.GroupUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new GroupUsers {

};
```


## Classes <a name="Classes" id="Classes"></a>

### GroupTimeoutsOutputReference <a name="GroupTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new GroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.group.GroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GroupUsersList <a name="GroupUsersList" id="@cdktf/provider-ionoscloud.group.GroupUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new GroupUsersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.group.GroupUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.group.GroupUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.group.GroupUsersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.group.GroupUsersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.group.GroupUsersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.group.GroupUsersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.group.GroupUsersList.get"></a>

```csharp
private GroupUsersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.group.GroupUsersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.group.GroupUsersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.group.GroupUsersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GroupUsersOutputReference <a name="GroupUsersOutputReference" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new GroupUsersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.administrator">Administrator</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.forceSecAuth">ForceSecAuth</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.group.GroupUsers">GroupUsers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Administrator`<sup>Required</sup> <a name="Administrator" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.administrator"></a>

```csharp
public IResolvable Administrator { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `ForceSecAuth`<sup>Required</sup> <a name="ForceSecAuth" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.forceSecAuth"></a>

```csharp
public IResolvable ForceSecAuth { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.group.GroupUsersOutputReference.property.internalValue"></a>

```csharp
public GroupUsers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.group.GroupUsers">GroupUsers</a>

---



