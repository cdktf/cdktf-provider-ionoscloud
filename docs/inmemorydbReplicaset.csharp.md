# `inmemorydbReplicaset` Submodule <a name="`inmemorydbReplicaset` Submodule" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InmemorydbReplicaset <a name="InmemorydbReplicaset" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset ionoscloud_inmemorydb_replicaset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicaset(Construct Scope, string Id, InmemorydbReplicasetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig">InmemorydbReplicasetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig">InmemorydbReplicasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putConnections">PutConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetInitialSnapshotId">ResetInitialSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnections` <a name="PutConnections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putConnections"></a>

```csharp
private void PutConnections(InmemorydbReplicasetConnections Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putConnections.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

---

##### `PutCredentials` <a name="PutCredentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putCredentials"></a>

```csharp
private void PutCredentials(InmemorydbReplicasetCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(InmemorydbReplicasetMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

---

##### `PutResources` <a name="PutResources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putResources"></a>

```csharp
private void PutResources(InmemorydbReplicasetResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putTimeouts"></a>

```csharp
private void PutTimeouts(InmemorydbReplicasetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialSnapshotId` <a name="ResetInitialSnapshotId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetInitialSnapshotId"></a>

```csharp
private void ResetInitialSnapshotId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a InmemorydbReplicaset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

InmemorydbReplicaset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

InmemorydbReplicaset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

InmemorydbReplicaset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

InmemorydbReplicaset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a InmemorydbReplicaset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InmemorydbReplicaset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InmemorydbReplicaset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the InmemorydbReplicaset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference">InmemorydbReplicasetConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference">InmemorydbReplicasetCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dnsName">DnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference">InmemorydbReplicasetMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference">InmemorydbReplicasetResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference">InmemorydbReplicasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connectionsInput">ConnectionsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentialsInput">CredentialsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicyInput">EvictionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotIdInput">InitialSnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceModeInput">PersistenceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicasInput">ReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resourcesInput">ResourcesInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicy">EvictionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotId">InitialSnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceMode">PersistenceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicas">Replicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connections"></a>

```csharp
public InmemorydbReplicasetConnectionsOutputReference Connections { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference">InmemorydbReplicasetConnectionsOutputReference</a>

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentials"></a>

```csharp
public InmemorydbReplicasetCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference">InmemorydbReplicasetCredentialsOutputReference</a>

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dnsName"></a>

```csharp
public string DnsName { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindow"></a>

```csharp
public InmemorydbReplicasetMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference">InmemorydbReplicasetMaintenanceWindowOutputReference</a>

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resources"></a>

```csharp
public InmemorydbReplicasetResourcesOutputReference Resources { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference">InmemorydbReplicasetResourcesOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeouts"></a>

```csharp
public InmemorydbReplicasetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference">InmemorydbReplicasetTimeoutsOutputReference</a>

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connectionsInput"></a>

```csharp
public InmemorydbReplicasetConnections ConnectionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentialsInput"></a>

```csharp
public InmemorydbReplicasetCredentials CredentialsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EvictionPolicyInput`<sup>Optional</sup> <a name="EvictionPolicyInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicyInput"></a>

```csharp
public string EvictionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialSnapshotIdInput`<sup>Optional</sup> <a name="InitialSnapshotIdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotIdInput"></a>

```csharp
public string InitialSnapshotIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindowInput"></a>

```csharp
public InmemorydbReplicasetMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

---

##### `PersistenceModeInput`<sup>Optional</sup> <a name="PersistenceModeInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceModeInput"></a>

```csharp
public string PersistenceModeInput { get; }
```

- *Type:* string

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicasInput"></a>

```csharp
public double ReplicasInput { get; }
```

- *Type:* double

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resourcesInput"></a>

```csharp
public InmemorydbReplicasetResources ResourcesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicy"></a>

```csharp
public string EvictionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialSnapshotId`<sup>Required</sup> <a name="InitialSnapshotId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotId"></a>

```csharp
public string InitialSnapshotId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PersistenceMode`<sup>Required</sup> <a name="PersistenceMode" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceMode"></a>

```csharp
public string PersistenceMode { get; }
```

- *Type:* string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicas"></a>

```csharp
public double Replicas { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InmemorydbReplicasetConfig <a name="InmemorydbReplicasetConfig" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicasetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    InmemorydbReplicasetConnections Connections,
    InmemorydbReplicasetCredentials Credentials,
    string DisplayName,
    string EvictionPolicy,
    string PersistenceMode,
    double Replicas,
    InmemorydbReplicasetResources Resources,
    string Version,
    string Id = null,
    string InitialSnapshotId = null,
    string Location = null,
    InmemorydbReplicasetMaintenanceWindow MaintenanceWindow = null,
    InmemorydbReplicasetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human readable name of your replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.evictionPolicy">EvictionPolicy</a></code> | <code>string</code> | The eviction policy for the replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.persistenceMode">PersistenceMode</a></code> | <code>string</code> | Specifies How and If data is persisted. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.replicas">Replicas</a></code> | <code>double</code> | The total number of replicas in the replica set (one active and n-1 passive). |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.resources">Resources</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.version">Version</a></code> | <code>string</code> | The InMemoryDB version of your replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#id InmemorydbReplicaset#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.initialSnapshotId">InitialSnapshotId</a></code> | <code>string</code> | The ID of a snapshot to restore the replica set from. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.location">Location</a></code> | <code>string</code> | The replica set location. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connections"></a>

```csharp
public InmemorydbReplicasetConnections Connections { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#connections InmemorydbReplicaset#connections}

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.credentials"></a>

```csharp
public InmemorydbReplicasetCredentials Credentials { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#credentials InmemorydbReplicaset#credentials}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human readable name of your replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#display_name InmemorydbReplicaset#display_name}

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.evictionPolicy"></a>

```csharp
public string EvictionPolicy { get; set; }
```

- *Type:* string

The eviction policy for the replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#eviction_policy InmemorydbReplicaset#eviction_policy}

---

##### `PersistenceMode`<sup>Required</sup> <a name="PersistenceMode" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.persistenceMode"></a>

```csharp
public string PersistenceMode { get; set; }
```

- *Type:* string

Specifies How and If data is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#persistence_mode InmemorydbReplicaset#persistence_mode}

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.replicas"></a>

```csharp
public double Replicas { get; set; }
```

- *Type:* double

The total number of replicas in the replica set (one active and n-1 passive).

In case of a standalone instance, the value is 1. In all other cases, the value is > 1. The replicas will not be available as read replicas, they are only standby for a failure of the active instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#replicas InmemorydbReplicaset#replicas}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.resources"></a>

```csharp
public InmemorydbReplicasetResources Resources { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#resources InmemorydbReplicaset#resources}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The InMemoryDB version of your replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#version InmemorydbReplicaset#version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#id InmemorydbReplicaset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialSnapshotId`<sup>Optional</sup> <a name="InitialSnapshotId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.initialSnapshotId"></a>

```csharp
public string InitialSnapshotId { get; set; }
```

- *Type:* string

The ID of a snapshot to restore the replica set from.

If set, the replica set will be created from the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#initial_snapshot_id InmemorydbReplicaset#initial_snapshot_id}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The replica set location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#location InmemorydbReplicaset#location}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.maintenanceWindow"></a>

```csharp
public InmemorydbReplicasetMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#maintenance_window InmemorydbReplicaset#maintenance_window}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.timeouts"></a>

```csharp
public InmemorydbReplicasetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#timeouts InmemorydbReplicaset#timeouts}

---

### InmemorydbReplicasetConnections <a name="InmemorydbReplicasetConnections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicasetConnections {
    string Cidr,
    string DatacenterId,
    string LanId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.cidr">Cidr</a></code> | <code>string</code> | The IP and subnet for your instance. Note the following unavailable IP ranges: 10.233.64.0/18, 10.233.0.0/18, 10.233.114.0/24. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.datacenterId">DatacenterId</a></code> | <code>string</code> | The datacenter to connect your instance to. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.lanId">LanId</a></code> | <code>string</code> | The numeric LAN ID to connect your instance to. |

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

The IP and subnet for your instance. Note the following unavailable IP ranges: 10.233.64.0/18, 10.233.0.0/18, 10.233.114.0/24.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#cidr InmemorydbReplicaset#cidr}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.datacenterId"></a>

```csharp
public string DatacenterId { get; set; }
```

- *Type:* string

The datacenter to connect your instance to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#datacenter_id InmemorydbReplicaset#datacenter_id}

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.lanId"></a>

```csharp
public string LanId { get; set; }
```

- *Type:* string

The numeric LAN ID to connect your instance to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#lan_id InmemorydbReplicaset#lan_id}

---

### InmemorydbReplicasetCredentials <a name="InmemorydbReplicasetCredentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicasetCredentials {
    string Username,
    InmemorydbReplicasetCredentialsHashedPassword HashedPassword = null,
    string PlainTextPassword = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.username">Username</a></code> | <code>string</code> | The username for the initial InMemoryDB user. Some system usernames are restricted (e.g. 'admin', 'standby'). |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.hashedPassword">HashedPassword</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a></code> | hashed_password block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.plainTextPassword">PlainTextPassword</a></code> | <code>string</code> | The password for a InMemoryDB user. |

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username for the initial InMemoryDB user. Some system usernames are restricted (e.g. 'admin', 'standby').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#username InmemorydbReplicaset#username}

---

##### `HashedPassword`<sup>Optional</sup> <a name="HashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.hashedPassword"></a>

```csharp
public InmemorydbReplicasetCredentialsHashedPassword HashedPassword { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

hashed_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#hashed_password InmemorydbReplicaset#hashed_password}

---

##### `PlainTextPassword`<sup>Optional</sup> <a name="PlainTextPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.plainTextPassword"></a>

```csharp
public string PlainTextPassword { get; set; }
```

- *Type:* string

The password for a InMemoryDB user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#plain_text_password InmemorydbReplicaset#plain_text_password}

---

### InmemorydbReplicasetCredentialsHashedPassword <a name="InmemorydbReplicasetCredentialsHashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicasetCredentialsHashedPassword {
    string Algorithm,
    string Hash
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.algorithm">Algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#algorithm InmemorydbReplicaset#algorithm}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.hash">Hash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#hash InmemorydbReplicaset#hash}. |

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#algorithm InmemorydbReplicaset#algorithm}.

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.hash"></a>

```csharp
public string Hash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#hash InmemorydbReplicaset#hash}.

---

### InmemorydbReplicasetMaintenanceWindow <a name="InmemorydbReplicasetMaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicasetMaintenanceWindow {
    string DayOfTheWeek,
    string Time
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.dayOfTheWeek">DayOfTheWeek</a></code> | <code>string</code> | The name of the week day. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.time">Time</a></code> | <code>string</code> | Start of the maintenance window in UTC time. |

---

##### `DayOfTheWeek`<sup>Required</sup> <a name="DayOfTheWeek" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.dayOfTheWeek"></a>

```csharp
public string DayOfTheWeek { get; set; }
```

- *Type:* string

The name of the week day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#day_of_the_week InmemorydbReplicaset#day_of_the_week}

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.time"></a>

```csharp
public string Time { get; set; }
```

- *Type:* string

Start of the maintenance window in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#time InmemorydbReplicaset#time}

---

### InmemorydbReplicasetResources <a name="InmemorydbReplicasetResources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicasetResources {
    double Cores,
    double Ram
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.cores">Cores</a></code> | <code>double</code> | The number of CPU cores per instance. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.ram">Ram</a></code> | <code>double</code> | The amount of memory per instance in gigabytes (GB). |

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.cores"></a>

```csharp
public double Cores { get; set; }
```

- *Type:* double

The number of CPU cores per instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#cores InmemorydbReplicaset#cores}

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.ram"></a>

```csharp
public double Ram { get; set; }
```

- *Type:* double

The amount of memory per instance in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#ram InmemorydbReplicaset#ram}

---

### InmemorydbReplicasetTimeouts <a name="InmemorydbReplicasetTimeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicasetTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#create InmemorydbReplicaset#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#default InmemorydbReplicaset#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#delete InmemorydbReplicaset#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#update InmemorydbReplicaset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#create InmemorydbReplicaset#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#default InmemorydbReplicaset#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#delete InmemorydbReplicaset#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/inmemorydb_replicaset#update InmemorydbReplicaset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### InmemorydbReplicasetConnectionsOutputReference <a name="InmemorydbReplicasetConnectionsOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicasetConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanIdInput">LanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterId">DatacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanId">LanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterIdInput"></a>

```csharp
public string DatacenterIdInput { get; }
```

- *Type:* string

---

##### `LanIdInput`<sup>Optional</sup> <a name="LanIdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanIdInput"></a>

```csharp
public string LanIdInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterId"></a>

```csharp
public string DatacenterId { get; }
```

- *Type:* string

---

##### `LanId`<sup>Required</sup> <a name="LanId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanId"></a>

```csharp
public string LanId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.internalValue"></a>

```csharp
public InmemorydbReplicasetConnections InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

---


### InmemorydbReplicasetCredentialsHashedPasswordOutputReference <a name="InmemorydbReplicasetCredentialsHashedPasswordOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicasetCredentialsHashedPasswordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hashInput">HashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hash">Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `HashInput`<sup>Optional</sup> <a name="HashInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hashInput"></a>

```csharp
public string HashInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hash"></a>

```csharp
public string Hash { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.internalValue"></a>

```csharp
public InmemorydbReplicasetCredentialsHashedPassword InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

---


### InmemorydbReplicasetCredentialsOutputReference <a name="InmemorydbReplicasetCredentialsOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicasetCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.putHashedPassword">PutHashedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetHashedPassword">ResetHashedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetPlainTextPassword">ResetPlainTextPassword</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHashedPassword` <a name="PutHashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.putHashedPassword"></a>

```csharp
private void PutHashedPassword(InmemorydbReplicasetCredentialsHashedPassword Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.putHashedPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

---

##### `ResetHashedPassword` <a name="ResetHashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetHashedPassword"></a>

```csharp
private void ResetHashedPassword()
```

##### `ResetPlainTextPassword` <a name="ResetPlainTextPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetPlainTextPassword"></a>

```csharp
private void ResetPlainTextPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPassword">HashedPassword</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference">InmemorydbReplicasetCredentialsHashedPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPasswordInput">HashedPasswordInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPasswordInput">PlainTextPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPassword">PlainTextPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HashedPassword`<sup>Required</sup> <a name="HashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPassword"></a>

```csharp
public InmemorydbReplicasetCredentialsHashedPasswordOutputReference HashedPassword { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference">InmemorydbReplicasetCredentialsHashedPasswordOutputReference</a>

---

##### `HashedPasswordInput`<sup>Optional</sup> <a name="HashedPasswordInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPasswordInput"></a>

```csharp
public InmemorydbReplicasetCredentialsHashedPassword HashedPasswordInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

---

##### `PlainTextPasswordInput`<sup>Optional</sup> <a name="PlainTextPasswordInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPasswordInput"></a>

```csharp
public string PlainTextPasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `PlainTextPassword`<sup>Required</sup> <a name="PlainTextPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPassword"></a>

```csharp
public string PlainTextPassword { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.internalValue"></a>

```csharp
public InmemorydbReplicasetCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

---


### InmemorydbReplicasetMaintenanceWindowOutputReference <a name="InmemorydbReplicasetMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicasetMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeekInput">DayOfTheWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.timeInput">TimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeek">DayOfTheWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfTheWeekInput`<sup>Optional</sup> <a name="DayOfTheWeekInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```csharp
public string DayOfTheWeekInput { get; }
```

- *Type:* string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.timeInput"></a>

```csharp
public string TimeInput { get; }
```

- *Type:* string

---

##### `DayOfTheWeek`<sup>Required</sup> <a name="DayOfTheWeek" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```csharp
public string DayOfTheWeek { get; }
```

- *Type:* string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public InmemorydbReplicasetMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

---


### InmemorydbReplicasetResourcesOutputReference <a name="InmemorydbReplicasetResourcesOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicasetResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.storage">Storage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.coresInput">CoresInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ramInput">RamInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.cores">Cores</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ram">Ram</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.storage"></a>

```csharp
public double Storage { get; }
```

- *Type:* double

---

##### `CoresInput`<sup>Optional</sup> <a name="CoresInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.coresInput"></a>

```csharp
public double CoresInput { get; }
```

- *Type:* double

---

##### `RamInput`<sup>Optional</sup> <a name="RamInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ramInput"></a>

```csharp
public double RamInput { get; }
```

- *Type:* double

---

##### `Cores`<sup>Required</sup> <a name="Cores" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.cores"></a>

```csharp
public double Cores { get; }
```

- *Type:* double

---

##### `Ram`<sup>Required</sup> <a name="Ram" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ram"></a>

```csharp
public double Ram { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.internalValue"></a>

```csharp
public InmemorydbReplicasetResources InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

---


### InmemorydbReplicasetTimeoutsOutputReference <a name="InmemorydbReplicasetTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new InmemorydbReplicasetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



